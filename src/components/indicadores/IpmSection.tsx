
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IpmSection() {
  const [open, setOpen] = useState(false);

  // ======================
  // Valores atualizados (PDF)
  // ======================
  const dados = [
    { categoria: "Aposentadorias e Reformas", valor: 150_000_000 },
    { categoria: "Pensões", valor: 40_000_000 },
    { categoria: "Obrigações Patronais (IPMT/INSS)", valor: 48_000_000 },
    { categoria: "Despesas Variáveis de Pessoal", valor: 29_000_000 },
    { categoria: "Rescisões Trabalhistas", valor: 2_000_000 },
    { categoria: "Sentenças Judiciais", valor: 1_000_000 },
    { categoria: "Despesas de Exercícios Anteriores (DEA)", valor: 500_000 },
  ];

  const total = dados.reduce((acc, item) => acc + item.valor, 0);

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 space-y-10">

        {/* ======================================= */}
        {/* CABEÇALHO (padrão dos novos blocos) */}
        {/* ======================================= */}
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-900/80 
                        border border-slate-200 dark:border-slate-700 
                        shadow-md px-6 py-6 md:px-8 md:py-7">

          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase 
                        text-sky-600 dark:text-sky-400">
            Indicadores • Previdência Municipal (IPMT)
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl font-bold 
                         text-slate-900 dark:text-slate-50">
            Quanto o IPMT já pagou em 2025?
          </h2>

          <p className="mt-2 text-sm md:text-base text-slate-700 dark:text-slate-300 max-w-3xl">
            A previdência municipal é responsável pelo pagamento de aposentadorias,
            pensões e diversas obrigações trabalhistas. Estes são os valores
            <span className="font-semibold"> já pagos em 2025</span>.
          </p>

          <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 italic">
            Fonte: IPMT — valores pagos até o momento em 2025.
          </p>
        </div>

        {/* ======================================= */}
        {/* TABELA PRINCIPAL */}
        {/* ======================================= */}

        <div className="overflow-x-auto rounded-2xl 
                        border border-slate-300 dark:border-slate-800 
                        bg-white dark:bg-slate-900/60 
                        shadow-xl backdrop-blur">
          
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-900/80 
                              border-b border-slate-300 dark:border-slate-700">
              <tr>
                <th className="px-6 py-3 text-slate-600 dark:text-slate-400 
                               text-sm font-semibold">
                  Categoria
                </th>
                <th className="px-6 py-3 text-right text-slate-600 dark:text-slate-400 
                               text-sm font-semibold">
                  Valor Pago (R$)
                </th>
              </tr>
            </thead>

            <tbody>
              {dados.map((item, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-200 dark:border-slate-800 ${
                    i % 2 === 0
                      ? "bg-white dark:bg-slate-900/40"
                      : "bg-slate-50 dark:bg-slate-900/20"
                  }`}
                >
                  <td className="px-6 py-3 text-slate-700 dark:text-slate-200 text-sm">
                    {item.categoria}
                  </td>
                  <td className="px-6 py-3 text-right text-slate-900 dark:text-slate-100 font-semibold">
                    {item.valor.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}

              {/* TOTAL */}
              <tr className="bg-sky-100 dark:bg-sky-900/30 
                             border-t border-slate-300 dark:border-slate-700">
                <td className="px-6 py-4 font-bold text-sky-700 dark:text-sky-300 text-base">
                  Total Pago em 2025
                </td>
                <td className="px-6 py-4 text-right font-bold 
                               text-sky-700 dark:text-sky-300 text-base">
                  {total.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ======================================= */}
        {/* RESUMO + CTA SAIBA MAIS */}
        {/* ======================================= */}

        <div className="rounded-2xl border border-slate-300 dark:border-slate-800 
                        bg-white dark:bg-slate-900/70 p-6 shadow-lg space-y-3">

          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            O que esses números mostram?
          </h3>

          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            A maior parte das despesas previdenciárias está concentrada em
            aposentadorias, pensões e obrigações patronais. Somadas, elas
            representam mais de{" "}
            <span className="font-semibold text-sky-700 dark:text-sky-300">
              88% de todo o gasto previdenciário
            </span>{" "}
            do município em 2025.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-4 inline-flex items-center justify-center px-4 py-2.5 rounded-lg 
                       bg-sky-600 hover:bg-sky-700 text-white font-medium transition-all shadow-md
                       dark:bg-sky-500 dark:hover:bg-sky-400"
          >
            Saiba mais
          </button>
        </div>
      </section>

      {/* ======================================= */}
      {/* DRAWER PEDAGÓGICO */}
      {/* ======================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-lg w-full 
                         p-6 space-y-4 border border-slate-300 dark:border-slate-700"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Como funciona a Previdência Municipal?
              </h3>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                O IPMT financia aposentadorias, pensões e várias obrigações ligadas
                ao funcionalismo público. Ele depende tanto de contribuições dos
                servidores quanto de repasses da prefeitura.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                A maior parte do gasto previdenciário é obrigatória, o que reduz a
                margem de manobra financeira da cidade. Por isso, equilíbrio
                atuarial é essencial.
              </p>

              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>Aposentadorias e pensões crescem ano após ano.</li>
                <li>Obrigações patronais representam forte pressão sobre o orçamento.</li>
                <li>Decisões judiciais e rescisões podem gerar despesas extras.</li>
              </ul>

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
