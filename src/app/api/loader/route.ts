import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { readCSV, toNumber } from "../../../lib/csv";

// Força execução 100% Node.js (sem DOM, sem PDF)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const base = process.cwd();

    // Caminhos absolutos dos CSVs (agora na pasta public/data)
    const receitasPath = path.join(base, "public/data/receitas.csv");
    const despesasPath = path.join(base, "public/data/despesas.csv");

    if (!fs.existsSync(receitasPath) || !fs.existsSync(despesasPath)) {
      throw new Error("Arquivos CSV não encontrados na pasta /public/data");
    }

    // Lê os arquivos CSV
    const receitas = readCSV(receitasPath);
    const despesas = readCSV(despesasPath);

    // Calcula totais
    const totalReceitas = receitas.reduce(
      (acc: number, r) => acc + toNumber(r.valor || r.Value || 0),
      0
    );
    const totalDespesas = despesas.reduce(
      (acc: number, r) => acc + toNumber(r.valor || r.Value || 0),
      0
    );

    // Retorna JSON consolidado
    return NextResponse.json({
      ok: true,
      totais: {
        receitas: totalReceitas,
        despesas: totalDespesas,
        saldo: totalReceitas - totalDespesas,
      },
      fontes: {
        receitas: receitas.slice(0, 5),
        despesas: despesas.slice(0, 5),
      },
    });
  } catch (error) {
    console.error("Erro ao processar CSV:", error);
    return NextResponse.json({ ok: false, error: String(error) });
  }
}