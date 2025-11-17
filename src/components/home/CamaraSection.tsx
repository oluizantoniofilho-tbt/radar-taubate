"use client";

import React from "react";
import Link from "next/link";
import { CamaraOrcamentoChart } from "../charts/CamaraOrcamentoChart";
import { CamaraDespesasTop10Chart } from "../charts/CamaraDespesasTop10Chart";

export function CamaraSection() {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Câmara Municipal — Orçamento & Execução 2025
          </h2>

          <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
            Visão rápida sobre a execução orçamentária da Câmara Municipal de Taubaté, 
            destacando valores orçados, empenhados, liquidados e pagos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CamaraOrcamentoChart />
          <CamaraDespesasTop10Chart />
        </div>

        <div className="mt-10">
          <Link
            href="/camara"
            className="inline-block text-blue-700 dark:text-cyan-300 font-semibold hover:underline"
          >
            Ver detalhes completos →
          </Link>
        </div>

      </div>
    </section>
  );
}