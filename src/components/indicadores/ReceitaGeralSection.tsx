
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReceitaGeralSection() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 space-y-10">

        {/* ============================================================= */}
        {/* BLOCO SUPERIOR • FIX: cor no light + borda + padding */}
        {/* ============================================================= */}
        <header
          className="
            bg-white dark:bg-transparent 
            border border-slate-300 dark:border-none 
            rounded-2xl p-6 shadow-sm dark:shadow-none 
            space-y-4
          "
        >
          {/* FIX: título agora aparece no light */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Receita Pública — Visão Geral (2025)
          </h2>

          {/* FIX: cor do texto no light ajustada */}
          <p className="text-slate-700 dark:text-slate-300 max-w-3xl text-base md:text-lg leading-relaxed">
            Estrutura das receitas estimadas do Município segundo a LOA 2025. 
            Esses valores representam o{" "}
            <span className="font-semibold text-sky-700 dark:text-sky-300">
              potencial de financiamento
            </span>{" "}
            das políticas públicas da cidade.
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            *Valores estimados conforme LOA 2025. Podem sofrer alterações durante o ano.
          </p>
        </header>

        {/* ============================================================= */}
        {/* TABELA • FIX: cores do light melhoradas */}
        {/* ============================================================= */}
        <div className="overflow-x-auto rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xl">
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-900/80 border-b border-slate-300 dark:border-slate-700">
              <tr>
                <th className="px-6 py-3 text-slate-700 dark:text-slate-400 text-sm font-semibold">
                  Categoria
                </th>
                <th className="px-6 py-3 text-right text-slate-700 dark:text-slate-400 text-sm font-semibold">
                  Valor Estimado (R$)
                </th>
              </tr>
            </thead>

            <tbody>
              {receitas.map((r, i) => (
                <tr
                  key={i}
                  className={`
                    border-b border-slate-200 dark:border-slate-800
                    ${i % 2 === 0 ? "bg-white dark:bg-slate-900/40" : "bg-slate-50 dark:bg-slate-900/20"}
                  `}
                >
                  <td className="px-6 py-3 text-slate-800 dark:text-slate-200 text-sm">
                    {r.categoria}
                  </td>
                  <td className="px-6 py-3 text-right text-slate-900 dark:text-slate-100 font-semibold">
                    {r.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}

              <tr className="bg-sky-50 dark:bg-sky-900/30 border-t border-slate-300 dark:border-slate-700">
                <td className="px-6 py-4 font-bold text-sky-700 dark:text-sky-300 text-base">
                  Total Estimado
                </td>
                <td className="px-6 py-4 text-right font-bold text-sky-700 dark:text-sky-300 text-base">
                  {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ============================================================= */}
        {/* RESUMO + CTA “SAIBA MAIS” */}
        {/* ============================================================= */}
        <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 shadow-lg space-y-3">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            O que esta estrutura revela?
          </h3>

          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            A maior parte do financiamento municipal vem de{" "}
            <span className="font-semibold text-sky-700 dark:text-sky-300">
              Transferências Correntes
            </span>
            , principalmente do Estado e da União.
          </p>

          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            A dependência elevada de repasses externos reduz a autonomia financeira
            da cidade e reforça a importância da Receita Própria.
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

      {/* ============================================================= */}
      {/* DRAWER PEDAGÓGICO */}
      {/* ============================================================= */}
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
                Como funciona a Receita Municipal?
              </h3>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                Toda receita arrecadada pela cidade — impostos, serviços, transferências
                e recursos de capital — forma o orçamento público.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                Em Taubaté, mais de{" "}
                <span className="font-semibold text-sky-700 dark:text-sky-300">70%</span>{" "}
                do orçamento vem do Estado e da União.
              </p>

              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>A autonomia financeira do município é reduzida.</li>
                <li>Boa parte das receitas chega carimbada.</li>
                <li>A eficiência da Receita Própria é crucial para investimentos.</li>
              </ul>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Quanto maior a capacidade de arrecadar bem, maior a liberdade de investir.
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


