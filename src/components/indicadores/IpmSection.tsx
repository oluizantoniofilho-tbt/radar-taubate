"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IpmSection() {
  const [open, setOpen] = useState(false);

  // --- DADOS PRINCIPAIS DO IPMT ---
  const dados = [
    { categoria: "Pagamento de Inativos", valor: 191_000_000 },
    { categoria: "Pagamento de Pensionistas", valor: 44_000_000 },
    { categoria: "Custeio Administrativo (RPPS)", valor: 9_000_000 },
    { categoria: "Compensações Previdenciárias", valor: 11_000_000 },
    { categoria: "Reserva de Contingência", valor: 5_000_000 },
  ];

  const total = dados.reduce((acc, d) => acc + d.valor, 0);

  function format(v: number) {
    return v.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16 space-y-10">

        {/* HEADER */}
        <header className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white text-slate-900">
            Previdência Municipal — IPMT
          </h2>

          <p className="text-slate-300 dark:text-slate-300 text-slate-600 max-w-3xl text-base md:text-lg">
            O Instituto de Previdência do Município de Taubaté (IPMT) é hoje um dos
            principais fatores de pressão sobre as finanças municipais. A despesa com
            aposentadorias e pensões cresce ano após ano, reduzindo a capacidade de
            investimento da cidade.
          </p>

          <p className="text-xs text-slate-400 italic">
            *Valores informados pela LOA 2025.
          </p>
        </header>

        {/* CARDS PRINCIPAIS */}
        <div className="grid gap-4 md:grid-cols-3">
          
          {/* Total Geral */}
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-50/70 
              dark:bg-emerald-900/30 px-5 py-5 shadow-md">
            <p className="text-[11px] font-semibold uppercase tracking-wide 
                text-emerald-700 dark:text-emerald-300">
              Total da Despesa Previdenciária (2025)
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-50">
              {format(total)}
            </p>
            <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
              Soma de todas as despesas previdenciárias do município.
            </p>
          </div>

          {/* Inativos */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 
              bg-slate-50 dark:bg-slate-900/60 px-5 py-5 shadow-md">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Pagamento de Inativos
            </p>
            <p className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-50">
              {format(191_000_000)}
            </p>
          </div>

          {/* Pensionistas */}
          <div className="rounded-2xl border border-sky-500/30 bg-sky-50/70 
              dark:bg-sky-900/30 px-5 py-5 shadow-md">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
              Pagamento de Pensionistas
            </p>
            <p className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-50">
              {format(44_000_000)}
            </p>
          </div>

        </div>

        {/* TABELA */}
        <div className="rounded-2xl border border-slate-300 dark:border-slate-800 
            bg-white dark:bg-slate-900/70 shadow-lg overflow-hidden">

          <div className="px-5 pt-4 pb-3 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Detalhamento das Despesas Previdenciárias
            </h3>
          </div>

          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800/80">
              <tr>
                <th className="px-5 py-3 text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase">
                  Categoria
                </th>
                <th className="px-5 py-3 text-right text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase">
                  Valor (R$)
                </th>
              </tr>
            </thead>

            <tbody>
              {dados.map((d, i) => (
                <tr key={i} className="border-b border-slate-200 dark:border-slate-800">
                  <td className="px-5 py-3 text-slate-700 dark:text-slate-300">
                    {d.categoria}
                  </td>
                  <td className="px-5 py-3 text-right text-slate-900 dark:text-slate-100 font-semibold">
                    {format(d.valor)}
                  </td>
                </tr>
              ))}
            </tbody>

            {/* TOTAL */}
            <tfoot>
              <tr className="bg-emerald-100 dark:bg-emerald-900/30 border-t border-slate-300 dark:border-slate-700">
                <td className="px-5 py-4 font-bold text-emerald-700 dark:text-emerald-300">
                  Total
                </td>
                <td className="px-5 py-4 text-right font-bold text-emerald-700 dark:text-emerald-300">
                  {format(total)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* CTA SABER MAIS */}
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center mt-4 px-5 py-2.5 rounded-lg 
            bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-all shadow-md
            dark:bg-emerald-500 dark:hover:bg-emerald-400"
        >
          Saiba mais
        </button>
      </section>

      {/* MODAL PEDAGÓGICO */}
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
                Por que o IPMT pesa tanto no orçamento?
              </h3>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                A despesa previdenciária cresce mais rápido do que a receita da cidade.
                Isso reduz a capacidade de investimento e pressiona o caixa do município.
              </p>

              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>Mais aposentados que servidores ativos.</li>
                <li>Regras antigas de aposentadoria aumentam o custo.</li>
                <li>Compensações previdenciárias não cobrem o déficit.</li>
                <li>Parte significativa do orçamento já sai “carimbada”.</li>
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
