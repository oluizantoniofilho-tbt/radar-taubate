// src/components/indicadores/ReceitaGeralIntroSection.tsx

import React from "react";

const receitaTotalFiscal = 2_073_838_368.53;
const receitaTotalSeguridade = 505_133_696.0;
const receitaTotalGeral = 2_578_972_064.53;

const receitasCorrentes = [
  { tipo: "Impostos, Taxas e Contribuições de Melhoria", valor: 598_080_000.0 },
  { tipo: "Contribuições", valor: 18_550_000.0 },
  { tipo: "Receita Patrimonial", valor: 15_336_000.0 },
  { tipo: "Receita de Serviços", valor: 11_370_000.0 },
  { tipo: "Transferências Correntes", valor: 981_158_100.0 },
  { tipo: "Outras Receitas Correntes", valor: 33_030_000.0 },
];

const receitasCapital = [
  { tipo: "Alienação de Bens", valor: 140_410_000.0 },
  { tipo: "Amortização de Empréstimos", valor: 300_000.0 },
  { tipo: "Transferências de Capital", valor: 2_530_000.0 },
  { tipo: "Outras Receitas de Capital", valor: 30_299_250.0 },
];

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

export default function ReceitaGeralIntroSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Cabeçalho */}
        <header className="mb-8 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-500 uppercase">
            Indicadores • Receita Orçamentária 2025
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
            Quanto Taubaté espera arrecadar em 2025?
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-3xl">
            Os valores abaixo representam a{" "}
            <span className="font-semibold">
              estimativa oficial de receita para 2025
            </span>{" "}
            do município de Taubaté, conforme a{" "}
            <span className="font-semibold">LOA 2025</span>. Esses números
            mostram de onde vem o dinheiro que sustenta saúde, educação,
            folha de pagamento, investimentos e o funcionamento da máquina pública.
          </p>
        </header>

        {/* Cards-resumo */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="rounded-2xl border border-sky-500/40 bg-sky-50/70 dark:bg-sky-900/30 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
              Receita total estimada (LOA 2025)
            </p>
            <p className="mt-1 text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50">
              {formatBRL(receitaTotalGeral)}
            </p>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              Soma do{" "}
              <span className="font-semibold">Orçamento Fiscal</span> e da{" "}
              <span className="font-semibold">Seguridade Social</span>.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Orçamento Fiscal
            </p>
            <p className="mt-1 text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50">
              {formatBRL(receitaTotalFiscal)}
            </p>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              Impostos, taxas, transferências e demais receitas da administração
              direta.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-900/20 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Seguridade Social (IPMT, saúde, previdência)
            </p>
            <p className="mt-1 text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50">
              {formatBRL(receitaTotalSeguridade)}
            </p>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              Bloco vinculado à previdência e à proteção social do município.
            </p>
          </div>
        </div>

        {/* Tabela principal */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/70 shadow-md overflow-hidden">
          <div className="px-4 pt-4 pb-3 border-b border-slate-100 dark:border-slate-700">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
              De onde vem o dinheiro? — Administração Direta
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
              Aqui estão as principais fontes de receita da{" "}
              <span className="font-semibold">Administração Direta</span> —
              aquilo que compõe o dia a dia financeiro da Prefeitura: impostos
              próprios, transferências, taxas, venda de bens e outras entradas.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-xs md:text-sm text-slate-700 dark:text-slate-200">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-[11px] md:text-xs uppercase tracking-wide">
                <tr>
                  <th className="px-4 py-3">Grupo de Receita</th>
                  <th className="px-4 py-3">Natureza</th>
                  <th className="px-4 py-3 text-right">Valor estimado (R$)</th>
                </tr>
              </thead>
              <tbody>
                {/* Correntes */}
                <tr className="bg-slate-100/70 dark:bg-slate-900/60">
                  <td className="px-4 py-3 align-top font-semibold">
                    Receitas Correntes
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300 text-xs md:text-sm">
                    Entradas que se repetem ano a ano: impostos, taxas, contribuições, serviços
                    e transferências. É o que mantém a máquina pública funcionando.
                  </td>
                  <td className="px-4 py-3 text-right font-semibold">
                    {formatBRL(
                      receitasCorrentes.reduce((acc, r) => acc + r.valor, 0)
                    )}
                  </td>
                </tr>

                {receitasCorrentes.map((r) => (
                  <tr
                    key={r.tipo}
                    className="border-t border-slate-100 dark:border-slate-800"
                  >
                    <td className="px-4 py-2 text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
                      Corrente
                    </td>
                    <td className="px-4 py-2">{r.tipo}</td>
                    <td className="px-4 py-2 text-right">
                      {formatBRL(r.valor)}
                    </td>
                  </tr>
                ))}

                {/* Capital */}
                <tr className="bg-slate-100/70 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 align-top font-semibold">
                    Receitas de Capital
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300 text-xs md:text-sm">
                    Recursos voltados principalmente para investimento: venda de bens,
                    transferências para obras, amortização de empréstimos e outras fontes
                    não recorrentes.
                  </td>
                  <td className="px-4 py-3 text-right font-semibold">
                    {formatBRL(
                      receitasCapital.reduce((acc, r) => acc + r.valor, 0)
                    )}
                  </td>
                </tr>

                {receitasCapital.map((r) => (
                  <tr
                    key={r.tipo}
                    className="border-t border-slate-100 dark:border-slate-800"
                  >
                    <td className="px-4 py-2 text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
                      Capital
                    </td>
                    <td className="px-4 py-2">{r.tipo}</td>
                    <td className="px-4 py-2 text-right">
                      {formatBRL(r.valor)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nota de rodapé */}
          <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/80">
            <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-400">
              Todos os valores apresentados são{" "}
              <span className="font-semibold">
                estimativas oficiais constantes na Lei Orçamentária Anual (LOA) 2025
              </span>{" "}
              do município de Taubaté. Na execução ao longo do ano, esses números podem
              variar conforme arrecadação real e decisões de gestão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
