import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { readCSV, toNumber } from "../../../lib/csv";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

export async function GET() {
  try {
    const base = process.cwd();

    // 📁 Lê os CSVs da pasta public/data
    const receitasPath = path.join(base, "public/data/receitas.csv");
    const despesasPath = path.join(base, "public/data/despesas.csv");

    const receitas = readCSV(receitasPath);
    const despesas = readCSV(despesasPath);

    // 💰 Calcula totais
    const totalReceitas = receitas.reduce((acc, r) => acc + toNumber(r.valor), 0);
    const totalDespesas = despesas.reduce((acc, r) => acc + toNumber(r.valor), 0);

    // 📑 Faz leitura parcial do PDF (LOA)
    const pdfPath = path.join(base, "public/data/loa.pdf");
    let pdfPreview = "";

    if (fs.existsSync(pdfPath)) {
      // 👉 Importa pdf-parse dinamicamente (sem quebrar o build ESM)
      const pdfParseModule = await import("pdf-parse");
      const pdfParse = (pdfParseModule as any).default || pdfParseModule;
    
      const buf = fs.readFileSync(pdfPath);
      const parsed = await pdfParse(buf);
      pdfPreview = (parsed.text || "").slice(0, 800);
    }

    // ✅ Retorna resposta consolidada
    return NextResponse.json({
      ok: true,
      totais: { receitas: totalReceitas, despesas: totalDespesas },
      pdfPreview,
    });
  } catch (error) {
    console.error("Erro ao processar API:", error);
    return NextResponse.json({ ok: false, error: String(error) });
  }
}