import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { readCSV, toNumber } from "../../../lib/csv"; // ajusta o caminho se necessário

// Força execução Node (evita tentativa de usar DOM)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const base = process.cwd();

    // 🗂️ Caminhos para os arquivos CSV dentro da pasta public/data
    const receitasPath = path.join(base, "public/data/receitas.csv");
    const despesasPath = path.join(base, "public/data/despesas.csv");

    // 📊 Lê os dados dos arquivos CSV
    const receitas = readCSV(receitasPath);
    const despesas = readCSV(despesasPath);

    // 💰 Calcula totais
    const totalReceitas = receitas.reduce((acc, r) => acc + toNumber(r.valor  r.Value  0), 0);
    const totalDespesas = despesas.reduce((acc, r) => acc + toNumber(r.valor  r.Value  0), 0);

    // ✅ Retorna JSON consolidado
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
    console.error("Erro ao processar API CSV:", error);
    return NextResponse.json({ ok: false, error: String(error) });
  }
}