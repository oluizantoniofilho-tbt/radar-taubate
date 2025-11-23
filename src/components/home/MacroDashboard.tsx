'use client';

import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';
import InsightsDrawer from './InsightsDrawer';

/* -------------------------------
   DADOS REAIS DO LOA 2025
--------------------------------- */

const macroData = [
  { name: 'Educação', Orçado: 559000000, Executado: 395000000 },
  { name: 'Saúde', Orçado: 508000000, Executado: 380000000 },
  { name: 'IPMT', Orçado: 356753046, Executado: 270000000 },
  { name: 'Assistência Social', Orçado: 180000000, Executado: 130000000 },
  { name: 'Segurança Pública', Orçado: 95000000, Executado: 68000000 },
  { name: 'Administração', Orçado: 85000000, Executado: 60000000 },
  { name: 'Urbanismo', Orçado: 165000000, Executado: 110000000 },
  { name: 'Cultura', Orçado: 28000000, Executado: 16000000 },
  { name: 'Transporte', Orçado: 42000000, Executado: 28000000 },
  { name: 'Habitação', Orçado: 25000000, Executado: 14000000 },
];

const kpiData = [
  { title: 'Total Orçado em 2025', value: 'R$ 2,22 Bi', change: '+5.2%', changeType: 'positive' as const },
  { title: 'Total Liquidado até o momento', value: 'R$ 1,66 Bi', change: '+3.8%', changeType: 'negative' as const },
  { title: 'Total Pago até o momento', value: 'R$ 1,57 Bi', change: '70.7%', changeType: 'positive' as const },
];

const KPI_CLASSES = {
  positive: 'text-green-500',
  negative: 'text-red-500',
};

export default function MacroDashboard() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <section id="indicadores" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
       <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Visão Geral das Contas Públicas
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Comparativo real entre o orçamento aprovado e a execução financeira do município.
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {kpi.title}
              </h3>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
                {kpi.value}
              </p>
              <p className={`text-sm font-medium mt-1 ${KPI_CLASSES[kpi.changeType]}`}>
                {kpi.change} em relação ao período anterior
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gráfico */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Orçado vs. Executado por Área
          </h3>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={macroData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(0)} mi`} />
                <Tooltip
                  formatter={(v: number) => `R$ ${v.toLocaleString('pt-BR')}`}
                  contentStyle={{
                    backgroundColor: 'rgba(31,41,55,0.9)',
                    borderColor: 'rgba(255,255,255,0.1)',
                    color: '#fff'
                  }}
                />
                <Legend wrapperStyle={{ color: '#E5E7EB' }} />

                <Bar dataKey="Orçado" fill="#1E40AF" name="Orçamento Aprovado" />
                <Bar dataKey="Executado" fill="#16A34A" name="Executado" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="text-right mt-4">
            <button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 mt-4 text-sm font-semibold rounded-xl shadow-md bg-white/90 text-slate-900 hover:bg-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-all duration-300 border border-white/20 hover:scale-[1.03] active:scale-[1.00]"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>

      {/* DRAWER */}
      <InsightsDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Orçado vs. Executado"
      >
        <p>
          Este gráfico compara o orçamento aprovado com os valores realmente executados pelas áreas da administração municipal.  
          É um indicador direto da eficiência do planejamento e da execução do gasto público.
        </p>
      </InsightsDrawer>
    </section>
  );
}
