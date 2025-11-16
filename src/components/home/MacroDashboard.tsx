'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import InsightsDrawer from './InsightsDrawer';

const data = [
  {
    name: 'Saúde',
    Orçado: 4000,
    Executado: 2400,
  },
  {
    name: 'Educação',
    Orçado: 3000,
    Executado: 1398,
  },
  {
    name: 'Segurança',
    Orçado: 2000,
    Executado: 9800,
  },
  {
    name: 'Infraestrutura',
    Orçado: 2780,
    Executado: 3908,
  },
  {
    name: 'Administração',
    Orçado: 1890,
    Executado: 4800,
  },
];

const kpiData = [
    { title: 'Receitas Arrecadadas', value: 'R$ 1,2 Bi', change: '+5.2%', changeType: 'positive' as const },
    { title: 'Despesas Executadas', value: 'R$ 1,1 Bi', change: '+3.8%', changeType: 'negative' as const },
    { title: 'Saldo Orçamentário', value: 'R$ 100 Mi', change: '+15%', changeType: 'positive' as const },
  ];

const KPI_CARD_CLASSES = {
    positive: 'text-green-500',
    negative: 'text-red-500',
  };

export default function MacroDashboard() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <section id="indicadores" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Visão Geral das Contas Públicas</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Análise consolidada das receitas e despesas do município.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{kpi.title}</h3>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mt-2">{kpi.value}</p>
              <p className={`text-sm font-medium mt-1 ${KPI_CARD_CLASSES[kpi.changeType]}`}>{kpi.change} em relação ao período anterior</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Orçado vs. Executado por Área</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(31, 41, 55, 0.8)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#FFF'
                  }}
                />
                <Legend wrapperStyle={{ color: '#E5E7EB' }} />
                <Bar dataKey="Orçado" fill="#1E40AF" name="Orçamento Aprovado" />
                <Bar dataKey="Executado" fill="#16A34A" name="Valor Executado" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-right mt-4">
            <button onClick={() => setDrawerOpen(true)} className="inline-flex items-center gap-2 px-5 py-2.5 mt-4 text-sm font-semibold rounded-xl shadow-md bg-white/90 text-slate-900 hover:bg-white dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 transition-all duration-300 border border-white/20 hover:scale-[1.03] active:scale-[1.00]">Saiba mais</button>
          </div>
        </div>
      </div>
      <InsightsDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} title="Orçado vs. Executado">
        <p>Este gráfico compara o valor que foi planejado (orçado) com o que foi efetivamente gasto (executado) nas principais áreas de atuação da prefeitura. É um indicador chave da eficiência e do planejamento orçamentário.</p>
      </InsightsDrawer>
    </section>
  );
}
