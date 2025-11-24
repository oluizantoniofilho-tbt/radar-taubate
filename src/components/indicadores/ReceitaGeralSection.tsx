
"use client";

import React from "react";

export default function ReceitaGeralSection() {
  const receitas = [
    { categoria: "Receita Tributária", valor: 350_000_000 },
    { categoria: "Receita de Contribuições", valor: 21_000_000 },
    { categoria: "Receita Patrimonial", valor: 18_200_000 },
    { categoria: "Receita Agropecuária", valor: 600_000 },
    { categoria: "Receita Industrial", valor: 0 },
    { categoria: "Receita de Serviços", valor: 21_500_000 },
    { categoria: "Transferências Correntes", valor: 1_323_000_000 },
    { categoria: "Outras Receitas Correntes", valor: 7_000_000 },
    { categoria: "Operações de Crédito", valor: 0 },
    { categoria: "Alienação de Bens", valor: 8_000_000 },
    { categoria: "Amortização de Empréstimos", valor: 0 },
    { categoria: "Transferências de Capital", valor: 15_000_000 },
    { categoria: "Outras Receitas de Capital", valor: 0 },
  ];

  const total = receitas.reduce((acc, r) => acc + r.valor, 0);

  {/* Acrescentei section-light e content-spacing para melhorar a visualização no light mode */}
  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 space-y-10 section-light content-spacing">
      
      {/* TÍTULO PRINCIPAL */}
      <header className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Receita Pública — Visão Geral (2025)
        </h2>
        <p className="text-slate-300 max-w-3xl text-base md:text-lg">
          Estrutura das receitas estimadas do Município segundo a LOA 2025.  
          Estes valores representam o <span className="font-semibold text-sky-300">potencial de financiamento</span> das políticas públicas da cidade.
        </p>

        <p className="text-xs text-slate-400 italic">
          *Valores estimados conforme LOA 2025. Podem sofrer alterações durante o ano.
        </p>
      </header>

      {/* TABELA e acrescentei kpi-card para melhorar a visualização no light-mode */} 
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl backdrop-blur kpi-card">
        <table className="w-full text-left light-table">
          <thead className="bg-slate-900/80 border-b border-slate-700">
            <tr>
              <th className="px-6 py-3 text-slate-400 text-sm font-semibold">Categoria</th>
              <th className="px-6 py-3 text-right text-slate-400 text-sm font-semibold">
                Valor Estimado (R$)
              </th>
            </tr>
          </thead>

          <tbody>
            {receitas.map((r, i) => (
              <tr
                key={i}
                className={`border-b border-slate-800 ${
                  i % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/20"
                }`}
              >
                <td className="px-6 py-3 text-slate-200 text-sm">{r.categoria}</td>
                <td className="px-6 py-3 text-right text-slate-100 font-semibold">
                  {r.valor.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
            ))}

            {/* TOTAL */}
            <tr className="bg-sky-900/30 border-t border-slate-700">
              <td className="px-6 py-4 font-bold text-sky-300 text-base">
                Total Estimado
              </td>
              <td className="px-6 py-4 text-right font-bold text-sky-300 text-base">
                {total.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* BLOCO ANALÍTICO CURTO (já pronto para expansão futura) acrescentei light-table para melhorar a visualização no light-mode */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg space-y-3 light-table">
        <h3 className="text-xl font-semibold text-white">
          O que esta estrutura revela?
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          A maior parte do financiamento municipal vem de{" "}
          <span className="font-semibold text-sky-300">Transferências Correntes</span>,
          principalmente do Estado e da União.  
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          A dependência elevada de repasses externos reduz a autonomia financeira da cidade, ao mesmo tempo em que pressiona por maior eficiência na Receita Própria.
        </p>
      </div>
    </section>
  );
}
