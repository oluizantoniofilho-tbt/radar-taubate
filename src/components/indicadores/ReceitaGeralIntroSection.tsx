
// src/components/indicadores/ReceitaGeralIntroSection.tsx
// ✅ Versão melhorada — Light mode forte, dark mode consistente
// ✅ Espaçamento, cores e bordas uniformizadas
// ✅ Títulos com mais destaque no light mode
// ✨ Comentários adicionados para você rastrear mudanças

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
    <section className="py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* ================================================
            CABEÇALHO — Tipografia reforçada no light mode
        ================================================= */}
        {/* CARD DO TÍTULO — Agora com bordas, sombra e respiro */}
          <div className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-slate-700 p-6 md:p-8 shadow-lg mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 dark:text-sky-400 uppercase">
            Indicadores • Receita Orçamentária 2025
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-snug">
            Quanto Taubaté espera arrecadar em 2025?
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
          Os valores abaixo representam a{" "}
          <span className="font-semibold">estimativa oficial de receita para 2025</span>,
          conforme a <span className="font-semibold">LOA 2025</span>. Esses números mostram
          de onde vem o dinheiro que financia saúde, educação, folha de pagamento,
          investimentos e toda a administração pública.
          </p>
          </div>
            
        

        {/* ================================================
            CARDS RESUMO — bordas e paddings uniformizados
        ================================================= */}
        <div className="grid gap-5 md:grid-cols-3 mb-10">
          <div className="rounded-2xl border border-sky-300 dark:border-sky-800 bg-sky-50/70 dark:bg-sky-900/30 p-6 shadow-md">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
              Receita total estimada (LOA 2025)
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              {formatBRL(receitaTotalGeral)}
            </p>
            <p className="mt-2 text-[12px] text-slate-700 dark:text-slate-300 leading-relaxed">
              Soma do <span className="font-semibold">Orçamento Fiscal</span> e da{" "}
              <span className="font-semibold">Seguridade Social</span>.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 p-6 shadow-md">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Orçamento Fiscal
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              {formatBRL(receitaTotalFiscal)}
            </p>
            <p className="mt-2 text-[12px] text-slate-700 dark:text-slate-300 leading-relaxed">
              Impostos, taxas, transferências e receitas gerais da administração direta.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-900/20 p-6 shadow-md">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Seguridade Social
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              {formatBRL(receitaTotalSeguridade)}
            </p>
            <p className="mt-2 text-[12px] text-slate-700 dark:text-slate-300 leading-relaxed">
              Receitas vinculadas à previdência e à proteção social.
            </p>
          </div>
        </div>

        {/* ================================================
            TABELA PRINCIPAL — layout preservado
        ================================================= */}
        <div className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/70 shadow-lg overflow-hidden">
          <div className="px-6 pt-5 pb-4 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              De onde vem o dinheiro? — Administração Direta
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 max-w-3xl">
              Este bloco apresenta as principais fontes de receita corrente e de capital
              que compõem o funcionamento diário da Prefeitura.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-800 dark:text-slate-200">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-xs uppercase tracking-wide">
                <tr>
                  <th className="px-6 py-3">Grupo de Receita</th>
                  <th className="px-6 py-3">Natureza</th>
                  <th className="px-6 py-3 text-right">Valor estimado (R$)</th>
                </tr>
              </thead>

              <tbody>
                {/* Correntes */}
                <tr className="bg-slate-50 dark:bg-slate-900/50">
                  <td className="px-6 py-3 font-semibold">Receitas Correntes</td>
                  <td className="px-6 py-3 text-slate-600 dark:text-slate-300">
                    Entradas recorrentes: impostos, taxas, contribuições, serviços
                    e transferências.
                  </td>
                  <td className="px-6 py-3 text-right font-semibold">
                    {formatBRL(receitasCorrentes.reduce((acc, r) => acc + r.valor, 0))}
                  </td>
                </tr>

                {receitasCorrentes.map((r) => (
                  <tr
                    key={r.tipo}
                    className="border-t border-slate-200 dark:border-slate-800"
                  >
                    <td className="px-6 py-2 text-xs text-slate-500 dark:text-slate-400">
                      Corrente
                    </td>
                    <td className="px-6 py-2">{r.tipo}</td>
                    <td className="px-6 py-2 text-right">{formatBRL(r.valor)}</td>
                  </tr>
                ))}

                {/* Capital */}
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
                  <td className="px-6 py-3 font-semibold">Receitas de Capital</td>
                  <td className="px-6 py-3 text-slate-600 dark:text-slate-300">
                    Recursos não recorrentes: alienação, amortização, transferências
                    específicas e outras entradas extraordinárias.
                  </td>
                  <td className="px-6 py-3 text-right font-semibold">
                    {formatBRL(receitasCapital.reduce((acc, r) => acc + r.valor, 0))}
                  </td>
                </tr>

                {receitasCapital.map((r) => (
                  <tr
                    key={r.tipo}
                    className="border-t border-slate-200 dark:border-slate-800"
                  >
                    <td className="px-6 py-2 text-xs text-slate-500 dark:text-slate-400">
                      Capital
                    </td>
                    <td className="px-6 py-2">{r.tipo}</td>
                    <td className="px-6 py-2 text-right">{formatBRL(r.valor)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rodapé */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Todos os valores apresentados são estimativas oficiais da{" "}
              <span className="font-semibold">LOA 2025</span>. Esses números podem variar
              conforme arrecadação real e ajustes durante o ano.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
