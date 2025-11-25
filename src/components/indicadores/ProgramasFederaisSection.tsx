"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProgramasFederaisSection() {
  const [open, setOpen] = useState(false);

  const programas = [
    { programa: "SUS (Sistema Único de Saúde)", valor: 51_193_050.0 },
    { programa: "FUNDEB", valor: 212_190_000.0 },
    { programa: "FNDE", valor: 65_900_000.0 },
    { programa: "FNAS (Assistência Social)", valor: 123_650_000.0 },
  ];

  const total = programas.reduce((acc, p) => acc + p.valor, 0);

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 space-y-10">

        {/* Título */}
        <header className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Principais Programas Federais — Repasse 2025
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-base md:text-lg">
            Estes programas representam as maiores transferências da União para
            financiamento de saúde, educação e assistência social em Taubaté.
          </p>
        </header>

        {/* Tabela */}
        <div className="overflow-x-auto rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-lg">
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-900/80 border-b border-slate-300 dark:border-slate-700">
              <tr>
                <th className="px-6 py-3 text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  Programa Federal
                </th>
                <th className="px-6 py-3 text-right text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  Valor Previsto (R$)
                </th>
              </tr>
            </thead>

            <tbody>
              {programas.map((p, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-200 dark:border-slate-800 ${
                    i % 2 === 0
                      ? "bg-white dark:bg-slate-900/40"
                      : "bg-slate-50 dark:bg-slate-900/20"
                  }`}
                >
                  <td className="px-6 py-3 text-slate-800 dark:text-slate-200 text-sm">
                    {p.programa}
                  </td>
                  <td className="px-6 py-3 text-right text-slate-900 dark:text-slate-100 font-semibold">
                    {p.valor.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}

              <tr className="bg-sky-100 dark:bg-sky-900/30 border-t border-slate-300 dark:border-slate-700">
                <td className="px-6 py-4 font-bold text-sky-700 dark:text-sky-300 text-base">
                  Total Geral
                </td>
                <td className="px-6 py-4 text-right font-bold text-sky-700 dark:text-sky-300 text-base">
                  {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/70 p-6 shadow-md space-y-3">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Por que estes programas são importantes?
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            A maior parte da política pública que impacta diretamente o cidadão
            depende desses repasses federais. Eles sustentam saúde, educação,
            assistência, alimentação escolar, vigilância sanitária e programas sociais.
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

      {/* Drawer */}
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
                Como esses programas funcionam?
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Cada programa federal possui regras específicas, indicadores de
                desempenho e áreas obrigatórias de aplicação. Eles garantem a
                continuidade de serviços essenciais e evitam colapsos na gestão
                municipal.
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
