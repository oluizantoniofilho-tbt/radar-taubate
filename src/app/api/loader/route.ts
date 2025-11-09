import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { readCSV, toNumber } from "../../../lib/csv"; // src/lib/csv.ts

// Garante execução no Node (Buffer, fs, etc.)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const base = process.cwd();

    // Lê CSVs de src/data
    const receitas = readCSV(path.join(base, "src/data/receitas.csv"));
    const despesas = readCSV(path.join(base, "src/data/despesas.csv"));

    // Totais
    const totalReceitas = receitas.reduce((acc, r) => acc + toNumber(r.valor ?? r.value ?? r.amount), 0);
    const totalDespesas = despesas.reduce((acc, r) => acc + toNumber(r.valor ?? r.value ?? r.amount), 0);

    // TOP 5 por fonte (exemplo simples)
    const receitasPorFonte: Record<string, number> = {};
    for (const r of receitas) {
      const fonte = (r.fonte ?? r.category ?? "Outros").toString();
      receitasPorFonte[fonte] = (receitasPorFonte[fonte] ?? 0) + toNumber(r.valor ?? r.value ?? r.amount);
    }
    const topReceitas = Object.entries(receitasPorFonte)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([fonte, valor]) => ({ fonte, valor }));

    // ---------- PDF: leitura parcial (opcional) ----------
    let pdfPreview = "";
    try {
      const pdfPath = path.join(base, "src/data/loa.pdf");
      if (fs.existsSync(pdfPath) && fs.statSync(pdfPath).size > 0) {
        const buf = fs.readFileSync(pdfPath);

        // Carrega pdf-parse de forma resiliente (CJS/ESM)
        let pdfParseFn: any;
        try {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          pdfParseFn = require("pdf-parse");
          if (pdfParseFn && pdfParseFn.default) pdfParseFn = pdfParseFn.default;
        } catch {
          const mod: any = await import("pdf-parse" as any);
          pdfParseFn = mod?.default ?? mod;
        }

        const parsed = await pdfParseFn(buf);
        pdfPreview = (parsed?.text ?? "").slice(0, 800);
      }
    } catch {
      // se falhar o PDF, seguimos sem travar a API
    }

    return NextResponse.json({
      ok: true,
      totais: { receitas: totalReceitas, despesas: totalDespesas },
      topReceitas,
      pdfPreview,
    });
  } catch (error) {
    console.error("Erro na API /api/loader:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}