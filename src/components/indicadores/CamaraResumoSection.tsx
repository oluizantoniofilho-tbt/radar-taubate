"use client";

import React from "react";

export default function CamaraResumoSection() {
  // Dados reais fornecidos
  const orcado2025 = 45_600_000;
  const pago2025 = 33_185_611.14;
  const pago2024 = 35_783_714.19;
  const populacao = 322_397;

  const execPercent = (pago2025 / orcado2025) * 100;
  const variacao = ((pago2025 - pago2024) / pago2024) * 100;
  const perCapita = pago2025 / populacao;

  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 space-y-12">
      
      {/* HEADER */}
      <header className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Câmara Municipal — Visão Executiva (2025)
        </h2>

        <p className="text-slate-300 max-w-3xl text-base md:text-lg">
          O Legislativo municipal tem função estratégica: legislar, fiscalizar e 
          representar a sociedade. Este bloco resume o peso financeiro da Câmara 
          dentro do orçamento geral de Taubaté — e como sua execução evolui ao 
          longo dos anos.
        </p>
      </header>

      {/* KPIs */}
      <div className="grid gap-6 md:grid-cols-3">
        
        {/* Execução */}
        <div className="rounded-2xl border border-sky-500/30 bg-slate-900/60 p-5 shadow-lg">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-400">
            Execução orçamentária 2025
          </p>
          <p className="mt-1 text-3xl font-bold text-white">
            {execPercent.toFixed(1).replace(".", ",")}%
          </p>
          <p className="text-xs text-slate-300 mt-1">
            Pago:{" "}
            <span className="font-semibold">
              R$ {pago2025.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>{" "}
            de um orçamento previsto de{" "}
            <span className="font-semibold">
              R$ {orcado2025.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </p>
        </div>

        {/* Variação */}
        <div className="rounded-2xl border border-emerald-600/30 bg-slate-900/60 p-5 shadow-lg">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-400">
            Comparação 2025 x 2024
          </p>
          <p className="mt-1 text-3xl font-bold text-white">
            {variacao.toFixed(1).replace(".", ",")}%{/* se negativo, redução */}
          </p>
          <p className="text-xs text-slate-300 mt-1">
            Pago em 2024:{" "}
            <span className="font-semibold">
              R$ {pago2024.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </p>
        </div>

        {/* Per capita */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 shadow-lg">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Custo por habitante (2025)
          </p>
          <p className="mt-1 text-3xl font-bold text-white">
            R$ {perCapita.toFixed(2).replace(".", ",")}
          </p>
          <p className="text-xs text-slate-300 mt-1">
            População estimada (IBGE 2022):{" "}
            <span className="font-semibold">
              {populacao.toLocaleString("pt-BR")}
            </span>
          </p>
        </div>
      </div>

      {/* TABELA RESUMO */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl backdrop-blur">
        <table className="w-full text-left">
          <thead className="bg-slate-900/80 border-b border-slate-700">
            <tr>
              <th className="px-6 py-3 text-slate-400 text-sm font-semibold">
                Indicador
              </th>
              <th className="px-6 py-3 text-right text-slate-400 text-sm font-semibold">
                Valor
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-slate-800 bg-slate-900/20">
              <td className="px-6 py-3 text-slate-200 text-sm">Orçado 2025</td>
              <td className="px-6 py-3 text-right text-slate-100 font-semibold">
                R$ {orcado2025.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </td>
            </tr>
            <tr className="border-b border-slate-800 bg-slate-900/40">
              <td className="px-6 py-3 text-slate-200 text-sm">Pago 2025</td>
              <td className="px-6 py-3 text-right text-slate-100 font-semibold">
                R$ {pago2025.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </td>
            </tr>
            <tr className="border-b border-slate-800 bg-slate-900/20">
              <td className="px-6 py-3 text-slate-200 text-sm">Pago 2024</td>
              <td className="px-6 py-3 text-right text-slate-100 font-semibold">
                R$ {pago2024.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ANÁLISE */}
      <div className="rounded-2xl border border-blue-500/20 bg-blue-900/20 p-6 shadow-lg space-y-4">
        <h3 className="text-xl font-semibold text-blue-300">
          O que esses números revelam?
        </h3>

        <p className="text-slate-200 text-sm leading-relaxed">
          O gasto do Legislativo representa uma fração pequena do orçamento 
          total da cidade, mas seu impacto institucional é grande. A Câmara 
          não executa políticas públicas diretamente; ela garante que a 
          Prefeitura seja fiscalizada, acompanhe resultados e cumpra metas 
          de governo.
        </p>

        <p className="text-slate-200 text-sm leading-relaxed">
          A redução do gasto executado entre 2024 e 2025 indica estabilidade —
          um sinal positivo quando comparado ao aumento de pressões fiscais 
          em outras áreas. O desafio é transformar esse gasto em mais 
          qualidade legislativa, participação cidadã e fiscalização efetiva.
        </p>

        <div className="pt-3 border-t border-blue-700/40">
          <p className="text-sm text-blue-200">
            <span className="font-bold">Resumo técnico:</span>  
            o custo legislativo é relativamente baixo, mas seu retorno depende
            da capacidade política da Câmara de fiscalizar o Executivo e
            conectar o debate público às metas do PPA.
          </p>
        </div>
      </div>

    </section>
  );
}
