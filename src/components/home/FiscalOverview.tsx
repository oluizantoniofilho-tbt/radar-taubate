'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import InsightsDrawer from './InsightsDrawer';
import { ExecucaoTermometros } from "@/components/charts/ExecucaoTermometros";

export default function FiscalOverview() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Análise Fiscal do Município
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Uma visão clara e objetiva da execução orçamentária de Taubaté.
          </p>
        </div>

        {/* ÚNICO CARD: Termômetros */}
        <motion.div
          className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl transition-shadow rounded-xl p-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={cardVariants}
        >
          <ExecucaoTermometros />

          <div className="text-right mt-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 mt-4 text-sm font-semibold rounded-xl shadow-md bg-white/90 text-slate-900 hover:bg-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-all duration-300 border border-white/20 hover:scale-[1.03] active:scale-[1.00]"
            >
              Saiba mais
            </button>
          </div>
        </motion.div>

      </div>

      {/* Drawer */}
      <InsightsDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Análise da Execução Orçamentária"
      >
        <div className="space-y-4">
          <p>A execução orçamentária é o processo que transforma o planejamento do orçamento em ações concretas. Aqui, você acompanha o percentual executado das principais áreas do município.</p>
          <p>Os termômetros mostram se a execução está alinhada ao planejado. Valores próximos a 100% no final do ano fiscal indicam boa fidelidade ao orçamento original.</p>
          <p>Use esses dados para fiscalizar a eficiência da gestão municipal e acompanhar como os recursos públicos estão sendo aplicados.</p>
        </div>
      </InsightsDrawer>
    </section>
  );
}