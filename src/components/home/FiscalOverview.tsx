'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import InsightsDrawer from './InsightsDrawer';
import { OrcadoExecutadoAreas } from "@/components/charts/OrcadoExecutadoAreas";
import { ExecucaoTermometros } from "@/components/charts/ExecucaoTermometros";

export default function FiscalOverview() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Evolução Fiscal Mensal</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Acompanhe a saúde financeira do município mês a mês.</p>
            </div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <OrcadoExecutadoAreas />
                <ExecucaoTermometros />
            </motion.div>
        </div>
        <InsightsDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} title="Evolução Fiscal Mensal">
            <p>Este gráfico mostra a trajetória das receitas e despesas ao longo dos meses. É fundamental para entender tendências, sazonalidades e o equilíbrio (ou desequilíbrio) das contas públicas no curto e médio prazo.</p>
        </InsightsDrawer>
    </section>
  );
}
