"use client";

import React from "react";

// ===============================
// DADOS DAS TRANSFERÊNCIAS
// ===============================
const transferencias = [
  {
    origem: "Transferências Federais – FNDE (Educação)",
    descricao:
      "FNDE — Fundeb, Alimentação Escolar, Transporte Escolar, Materiais, Equipamentos",
    valor: 175_850_000,
    percentual: 13.55,
  },
  {
    origem: "Transferências Federais – FNS (Saúde)",
    descricao:
      "Fundo Nacional de Saúde — Atenção Primária, Especializada, Vigilância, Farmácia",
    valor: 289_500_000,
    percentual: 22.3,
  },
  {
    origem: "Transferências Federais – FNAS",
    descricao:
      "Fundo Nacional de Assistência Social — Proteção Social Básica e Especial",
    valor: 45_300_000,
    percentual: 3.5,
  },
  {
    origem: "FUNDEB (Complementação União)",
    descricao:
      "Fundo de Manutenção e Desenvolvimento da Educação Básica — Complementação Federal",
    valor: 312_190_000,
    percentual: 24.0,
  },
  {
    origem: "Royalties Petróleo e Gás (Federal)",
    descricao:
      "ANP — Cota-parte Royalties Exploração de Petróleo e Gás Natural",
    valor: 35_100_000,
    percentual: 2.7,
  },

  // ESTADUAIS
  {
    origem: "Transferências Estaduais – ICMS",
    descricao: "Cota-parte ICMS (Tesouro Estadual)",
    valor: 180_500_000,
    percentual: 13.9,
  },
  {
    origem: "Transferências Estaduais – IPVA",
    descricao: "Cota-parte IPVA (Tesouro Estadual)",
    valor: 48_200_000,
    percentual: 3.7,
  },
  {
    origem: "Transferências Estaduais – SES (Saúde)",
    descricao:
      "Secretaria Estadual de Saúde — Assistência Farmacêutica, PAB, Convênios",
    valor: 42_800_000,
    percentual: 3.3,
  },
  {
    origem: "Transferências Estaduais – SEE (Educação)",
    descricao:
      "Secretaria Estadual de Educação — Transporte Escolar, Construções, Materiais",
    valor: 28_600_000,
    percentual: 2.2,
  },
  {
    origem: "Transferências Estaduais – FEAS",
    descricao:
      "Fundo de Ação Social do Estado — Proteção Social Básica e Especial",
    valor: 18_900_000,
    percentual: 1.5,
  },
  {
    origem: "Royalties Petróleo e Gás (Estadual)",
    descricao:
      "Cota-parte Estadual Royalties Exploração de Petróleo e Gás",
    valor: 12_850_000,
    percentual: 1.0,
  },
  {
    origem: "Convênios Estaduais Vinculados",
    descricao:
      "Emendas Parlamentares, Projetos Específicos, Infraestrutura",
    valor: 22_300_000,
    percentual: 1.7,
  },

  // MUNICIPAIS / OUTROS
  {
    origem: "Recursos Próprios de Fundos Municipais",
    descricao:
      "FMDI, FUNCAD, FMAS, FSS, FUMDEMAT, FMT, FEBOM, FUBEM",
    valor: 45_200_000,
    percentual: 3.5,
  },
  {
    origem: "Outras Transferências",
    descricao:
      "Transferências de Instituições Privadas, Convênios Diversos, Repasses Variados",
    valor: 61_710_000,
    percentual: 4.8,
  },
];

const total = transferencias.reduce((acc, t) => acc + t.valor, 0);

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

// ===============================
// COMPONENTE
// ===============================
export default function TransferenciasCorrentesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-20 pb-16 space-y-10">
      
      {/* HEADER */}
      <header className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Transferências Correntes — 2025
        </h2>

        <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg max-w-3xl">
          Este bloco detalha todo o dinheiro que **vem de fora do município** —
          recursos federais, estaduais, fundos públicos, convênios e repasses que
          financiam saúde, educação, assistência social e diversas políticas públicas.
        </p>

        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Fonte: LOA 2025 — valores orçados, não executados.
        </p>
      </header>

      {/* TABELA */}
      <div className="overflow-x-auto rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-xl">
        <table className="w-full text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-300 dark:border-slate-700">
            <tr>
              <th className="px-6 py-3 text-slate-700 dark:text-slate-300 font-semibold text-sm">
                Origem
              </th>
              <th className="px-6 py-3 text-slate-700 dark:text-slate-300 font-semibold text-sm">
                Descrição
              </th>
              <th className="px-6 py-3 text-right text-slate-700 dark:text-slate-300 font-semibold text-sm">
                Valor (R$)
              </th>
              <th className="px-4 py-3 text-right text-slate-700 dark:text-slate-300 font-semibold text-sm">
                %
              </th>
            </tr>
          </thead>

          <tbody>
            {transferencias.map((t, index) => (
              <tr
                key={index}
                className={`border-b border-slate-200 dark:border-slate-800 ${
                  index % 2 === 0
                    ? "bg-slate-50 dark:bg-slate-900/40"
                    : "bg-white dark:bg-slate-900/20"
                }`}
              >
                <td className="px-6 py-3 text-sm text-slate-800 dark:text-slate-200">
                  {t.origem}
                </td>
                <td className="px-6 py-3 text-sm text-slate-600 dark:text-slate-300">
                  {t.descricao}
                </td>
                <td className="px-6 py-3 text-right text-sm font-semibold text-slate-900 dark:text-white">
                  {formatBRL(t.valor)}
                </td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {t.percentual.toFixed(1)}%
                </td>
              </tr>
            ))}

            {/* TOTAL */}
            <tr className="bg-sky-100 dark:bg-sky-900/40 border-t border-slate-300 dark:border-slate-700 font-bold">
              <td className="px-6 py-4 text-sky-800 dark:text-sky-300">
                TOTAL
              </td>
              <td className="px-6 py-4 text-slate-700 dark:text-slate-200">
                Soma de todas as transferências correntes
              </td>
              <td className="px-6 py-4 text-right text-sky-800 dark:text-sky-300">
                {formatBRL(total)}
              </td>
              <td className="px-4 py-4 text-right text-sky-800 dark:text-sky-300">
                100%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* NOTA PEDAGÓGICA */}
      <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/50 p-6 shadow-md">
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          As transferências correntes representam a **principal fonte de financiamento**
          do município. Elas explicam por que Taubaté depende fortemente de repasses
          externos e por que a eficiência na **Receita Própria** é tão importante
          para ampliar a autonomia financeira da cidade.
        </p>
      </div>
    </section>
  );
}
