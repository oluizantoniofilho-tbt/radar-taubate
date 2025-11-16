'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import InsightsDrawer from './InsightsDrawer';
import { OrcadoExecutadoAreas } from "@/components/charts/OrcadoExecutadoAreas";
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Análise Fiscal do Município</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Uma visão clara e objetiva da execução orçamentária de Taubaté.</p>
        </div>

        {/* Card 1: Orçado vs. Executado por Área */}
        <motion.div
          className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl transition-shadow rounded-xl p-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={cardVariants}
        >
          <OrcadoExecutadoAreas />
          <div className="text-right mt-3">
            <button 
              onClick={() => setDrawerOpen(true)} 
              className="text-blue-500 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Saiba mais
            </button>
          </div>
        </motion.div>

        {/* Card 2: Termômetros de Execução */}
        <motion.div
          className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40 shadow-lg hover:shadow-xl transition-shadow rounded-xl p-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={cardVariants}
        >
          <ExecucaoTermometros />
          <div className="text-right mt-3">
            <button 
              onClick={() => setDrawerOpen(true)} 
              className="text-blue-500 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              Saiba mais
            </button>
          </div>
        </motion.div>

      </div>

      <InsightsDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} title="Análise da Execução Orçamentária">
        <div className="space-y-4">
          <p>A execução orçamentária é o processo que transforma o planejamento do orçamento em ações concretas. Aqui, você pode comparar o que foi planejado (orçado) com o que foi efetivamente gasto (executado) em diferentes áreas.</p>
          <p>Os termômetros indicam o percentual de execução das principais categorias de despesa, como Saúde e Educação. Valores próximos a 100% no final do ano fiscal indicam um bom alinhamento entre planejamento e execução. Discrepâncias podem sinalizar a necessidade de investigações mais aprofundadas sobre a gestão dos recursos.</p>
          <p>Use esses dados para fiscalizar a eficiência do governo municipal e garantir que os recursos públicos sejam aplicados conforme o planejado e em benefício da população.</p>
        </div>
      </InsightsDrawer>
    </section>
  );
}
