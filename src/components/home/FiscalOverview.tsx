'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import InsightsDrawer from './InsightsDrawer';

const data = [
  { month: 'Jan', Receitas: 4000, Despesas: 2400 },
  { month: 'Fev', Receitas: 3000, Despesas: 1398 },
  { month: 'Mar', Receitas: 2000, Despesas: 9800 },
  { month: 'Abr', Receitas: 2780, Despesas: 3908 },
  { month: 'Mai', Receitas: 1890, Despesas: 4800 },
  { month: 'Jun', Receitas: 2390, Despesas: 3800 },
  { month: 'Jul', Receitas: 3490, Despesas: 4300 },
];

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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
                <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)"/>
                            <XAxis dataKey="month" stroke="#9CA3AF"/>
                            <YAxis stroke="#9CA3AF"/>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                    color: '#FFF'
                                }}
                            />
                            <Legend wrapperStyle={{ color: '#E5E7EB' }} />
                            <Line type="monotone" dataKey="Receitas" stroke="#16A34A" strokeWidth={2} name="Receitas" />
                            <Line type="monotone" dataKey="Despesas" stroke="#DC2626" strokeWidth={2} name="Despesas" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-right mt-4">
                    <button onClick={() => setDrawerOpen(true)} className="text-blue-500 hover:underline">Saiba mais</button>
                </div>
            </motion.div>
        </div>
        <InsightsDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} title="Evolução Fiscal Mensal">
            <p>Este gráfico mostra a trajetória das receitas e despesas ao longo dos meses. É fundamental para entender tendências, sazonalidades e o equilíbrio (ou desequilíbrio) das contas públicas no curto e médio prazo.</p>
        </InsightsDrawer>
    </section>
  );
}
