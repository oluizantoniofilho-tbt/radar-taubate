 
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DespesaGeralSection() {
  const [open, setOpen] = useState(false);

  // Valores aproximados da LOA 2025 (ajuste se necessário)
  const despesaCorrente = 2_307_789_800; // custeio
  const despesaCapital = 256_210_570; // investimento
  const totalDespesa = despesaCorrente + despesaCapital;

  const pctCorrente = (despesaCorrente / totalDespesa) * 100;
  const pctCapital = (despesaCapital / totalDespesa) * 100;

  const formatBRL = (v: number) =>
    v.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

  return (
    <>
      {/* ===========================
          SECTION DESPESAS GERAIS
      ============================ */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 space-y-10">
        {/* CABEÇALHO EM CARD (light + dark) */}
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 shadow-md px-6 py-6 md:px-8 md:py-7">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sky-600 dark:text-sky-400">
            Indicadores • Despesa Orçamentária 2025
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
            Como Taubaté planeja gastar em 2025?
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-700 dark:text-slate-300 max-w-3xl">
            Estes são os valores <span className="font-semibold">estimados</span>{" "}
            da Lei Orçamentária Anual (LOA) de Taubaté para 2025. Aqui você vê
            quanto do orçamento a cidade usa para manter o presente (custeio) e
            quanto pretende investir no futuro (investimentos).
          </p>
          <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 italic">
            Fonte: LOA 2025 — valores orçados, não executados.
          </p>
        </div>

        {/* CARDS CUSTEIO x INVESTIMENTO */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* CUSTEIO */}
          <div className="rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 text-slate-50 px-5 py-5 border border-slate-800 shadow-lg">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-300">
              Despesa Corrente (Custeio)
            </p>
            <p className="mt-2 text-2xl md:text-3xl font-bold">
              {formatBRL(despesaCorrente)}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Representa{" "}
              <span className="font-semibold">
                {pctCorrente.toFixed(1).replace(".", ",")}%{" "}
              </span>
              de todo o orçamento da cidade para 2025.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Inclui folha de pagamento, manutenção de serviços, contratos em
              andamento, custeio da máquina pública e despesas do dia a dia.
            </p>
          </div>

          {/* INVESTIMENTO */}
          <div className="rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 text-slate-50 px-5 py-5 border border-slate-800 shadow-lg">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
              Despesa de Capital (Investimentos)
            </p>
            <p className="mt-2 text-2xl md:text-3xl font-bold">
              {formatBRL(despesaCapital)}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Representa apenas{" "}
              <span className="font-semibold">
                {pctCapital.toFixed(1).replace(".", ",")}%{" "}
              </span>
              do orçamento previsto para investimentos em 2025.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Abrange obras, infraestrutura, equipamentos, tecnologia e projetos
              que deixam legado futuro para a cidade.
            </p>
          </div>
        </div>

        {/* BARRA VISUAL CUSTEIO x INVESTIMENTO + CTA */}
        <div className="rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 border border-slate-800 shadow-lg px-6 py-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                Custeio x Investimento — quanto vai para onde?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Visualização simplificada da divisão do orçamento entre o que
                mantém a cidade funcionando hoje e o que prepara a cidade para
                o futuro.
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl
                bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold
                shadow-md transition-all"
            >
              Saiba mais
            </button>
          </div>

          {/* Barra proporcional */}
          <div className="mt-3 w-full h-7 rounded-full bg-slate-800 overflow-hidden flex">
            <div
              style={{ width: `${pctCorrente}%` }}
              className="h-full bg-sky-500 flex items-center justify-center text-[11px] font-semibold text-slate-900"
            >
              Custeio {pctCorrente.toFixed(1).replace(".", ",")}%
            </div>
            <div
              style={{ width: `${pctCapital}%` }}
              className="h-full bg-emerald-400 flex items-center justify-center text-[11px] font-semibold text-slate-900"
            >
              Investimento {pctCapital.toFixed(1).replace(".", ",")}%
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          MODAL PEDAGÓGICO
      ============================ */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-lg w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-2xl p-6 space-y-4"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                O que é custeio e o que é investimento?
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold">Despesa corrente (custeio)</span>{" "}
                é tudo aquilo que mantém a cidade funcionando: salários, luz,
                combustível, contratos de limpeza, merenda, medicamentos,
                manutenção de prédios, serviços terceirizados e o dia a dia da
                máquina pública.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold">
                  Despesa de capital (investimentos)
                </span>{" "}
                é voltada para o futuro: obras, infraestrutura, compra de
                equipamentos, tecnologia, reformas estruturais, ampliação de
                serviços e projetos que deixam legado para os próximos anos.
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Quando quase todo o orçamento vai para custeio, sobra pouco
                espaço para transformar a cidade com novos projetos. Por isso a
                discussão sobre eficiência do gasto corrente é tão importante
                quanto a discussão sobre novos investimentos.
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center px-4 py-2.5 rounded-lg
                  bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold
                  dark:bg-slate-700 dark:hover:bg-slate-600 transition-all"
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

