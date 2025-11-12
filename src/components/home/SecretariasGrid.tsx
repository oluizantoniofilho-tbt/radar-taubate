'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import Link from 'next/link';
import InsightsDrawer from './InsightsDrawer';

const secretarias = [
  { name: 'Educação', value: 400, color: '#1E40AF' },
  { name: 'Saúde', value: 300, color: '#16A34A' },
  { name: 'Infraestrutura', value: 200, color: '#D97706' },
  { name: 'Segurança', value: 150, color: '#DC2626' },
  { name: 'Cultura', value: 100, color: '#7C3AED' },
  { name: 'Esporte', value: 80, color: '#DB2777' },
];

export default function SecretariasGrid() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState({ title: '', content: '' });

  const handleOpenDrawer = (secretaria: any) => {
    setDrawerContent({
      title: `Secretaria de ${secretaria.name}`,
      content: `Análise detalhada dos gastos e investimentos da Secretaria de ${secretaria.name}. O valor de R$ ${secretaria.value} milhões representa o total executado no último período fiscal.`
    });
    setDrawerOpen(true);
  }

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Despesas por Secretaria</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Visualize a distribuição dos gastos nas principais áreas da administração.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {secretarias.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.name}</h3>
              <div className="w-48 h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{ value: 1 }]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill={item.color} />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">R$ {item.value} Mi</p>
              <div className="mt-4 flex-grow flex items-end">
                  <Link href="/relatorios" className="text-blue-500 hover:underline mr-4">Ver mais</Link>
                  <button onClick={() => handleOpenDrawer(item)} className="text-green-500 hover:underline">O que é isso?</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <InsightsDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} title={drawerContent.title}>
        <p>{drawerContent.content}</p>
      </InsightsDrawer>
    </section>
  );
}
