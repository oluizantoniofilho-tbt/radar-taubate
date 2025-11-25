
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// =====================
// DADOS DA LOA 2025
// =====================
const despesasCamara = [
  { label: "Pessoal e Encargos", valor: 26_480_000.0 },
  { label: "Custeio Operacional", valor: 7_950_000.0 },
  { label: "Investimentos", valor: 1_200_000.0 },
  { label: "Outras Despesas", valor: 310_000.0 },
];

const total = despesasCamara.reduce((acc, x) => acc + x.valor, 0);

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

// =====================
// COMPONENTE PRINCIPAL
// =====================
export default function CamaraResumoSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">

        {/* ===== HEADER ===== */}
        <header className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Câmara Municipal — Orçamento 2025
          </h2>

          <p className="text-slate-700 dark:text-slate-300 max-w-4xl text-base md:text-lg">
            O orçamento da Câmara é parte do Poder Legislativo e tem regras próprias.
            É composto majoritariamente por gastos de pessoal e custeio interno.
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            *Valores estimados conforme LOA 2025. Podem variar durante a execução.
          </p>
        </header>

        {/* ===== TABELA ===== */}
        <div className="overflow-x-auto rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 shadow-xl">
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-900/70 border-b border-slate-300 dark:border-slate-700">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Natureza da Despesa
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Valor (R$)
                </th>
              </tr>
            </thead>

            <tbody>
              {despesasCamara.map((item, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-200 dark:border-slate-700 ${
                    i % 2 === 0
                      ? "bg-white dark:bg-slate-900/40"
                      : "bg-slate-50 dark:bg-slate-900/20"
                  }`}
                >
                  <td className="px-6 py-3 text-slate-700 dark:text-slate-200 text-sm">
                    {item.label}
                  </td>
                  <td className="px-6 py-3 text-right text-slate-900 dark:text-slate-100 font-semibold">
                    {formatBRL(item.valor)}
                  </td>
                </tr>
              ))}

              <tr className="bg-violet-100 dark:bg-violet-900/30 border-t border-slate-300 dark:border-slate-700">
                <td className="px-6 py-4 font-bold text-violet-800 dark:text-violet-300 text-base">
                  Total Estimado
                </td>
                <td className="px-6 py-4 text-right font-bold text-violet-800 dark:text-violet-300 text-base">
                  {formatBRL(total)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== RESUMO + CTA ===== */}
        <div className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/70 p-6 shadow-lg space-y-3">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Como interpretar esse orçamento?
          </h3>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Cerca de <strong>80% do orçamento da Câmara</strong> é destinado a
            folha de pagamento e encargos. Isso é típico em casas legislativas
            devido à estrutura funcional, assessorias e cargos técnicos.
          </p>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Investimentos representam uma parcela pequena — geralmente voltada
            para manutenção do prédio, TI e modernização administrativa.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-4 inline-flex items-center justify-center px-4 py-2.5 rounded-lg 
              bg-violet-600 hover:bg-violet-700 text-white font-medium transition-all shadow-md
              dark:bg-violet-500 dark:hover:bg-violet-400"
          >
            Saiba mais sobre a Câmara
          </button>
        </div>
      </section>

      {/* ===== DRAWER ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4 border border-slate-300 dark:border-slate-700"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Como funciona o orçamento da Câmara?
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                O orçamento da Câmara é definido pela Constituição: ele recebe um
                percentual fixo da Receita Corrente Líquida (RCL). Isso garante
                independência entre os poderes.
              </p>

              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>É usado para salários, estrutura administrativa e atividades legislativas.</li>
                <li>Não compete com áreas como saúde, educação ou obras.</li>
                <li>Não pode ser remanejado pela Prefeitura.</li>
              </ul>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Entender a Câmara é entender metade da democracia: onde leis nascem
                e onde a fiscalização do Executivo deveria acontecer.
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg 
                  bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all
                  dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
