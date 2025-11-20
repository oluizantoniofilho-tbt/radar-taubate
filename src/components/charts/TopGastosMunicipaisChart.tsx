

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  CartesianGrid,
} from "recharts";

// Dados — placeholder (podem ser substituídos pelos dados reais)
const despesasSecretariaData = [
  { label: "Saúde", value: 420000000 },
  { label: "Educação", value: 380000000 },
  { label: "Obras", value: 120000000 },
  { label: "Administração", value: 98000000 },
  { label: "Segurança", value: 42000000 },
  { label: "Assistência Social", value: 28000000 },
  { label: "Esportes", value: 21000000 },
  { label: "Cultura", value: 18000000 },
  { label: "Mobilidade Urbana", value: 15000000 },
  { label: "Meio Ambiente", value: 12000000 },
];

// animação igual à do FiscalOverview
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function TopGastosMunicipaisChart() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">

        {/* CABEÇALHO */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Despesas por Secretaria — Top 10
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            As secretarias com maior volume de gastos da administração municipal.
          </p>
        </div>

        {/* CARD PAI — o bloco institucional premium */}
        <motion.div
          className="bg-white dark:bg-slate-900/70 backdrop-blur-sm 
                     border border-slate-300/40 dark:border-slate-700/40 
                     shadow-lg hover:shadow-xl transition-shadow 
                     rounded-xl p-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={cardVariants}
        >

          {/* CARD FILHO — o gráfico em si */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-4">

            <ResponsiveContainer width="100%" height={480}>
              <BarChart
                data={despesasSecretariaData}
                layout="vertical"
                margin={{ left: 80, right: 40, top: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

                {/* Labels */}
                <YAxis
                  dataKey="label"
                  type="category"
                  width={190}
                  tick={{ fill: "currentColor", fontSize: 13 }}
                />

                {/* Valores */}
                <XAxis
                  type="number"
                  tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(1)} mi`}
                  tick={{ fill: "currentColor", fontSize: 12 }}
                />

                {/* Tooltip formatado */}
                <Tooltip
                  formatter={(v: any) =>
                    v.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  }
                  contentStyle={{
                    backgroundColor: "rgba(15,23,42,0.9)",
                    borderRadius: 10,
                    border: "none",
                    color: "white",
                  }}
                />

                {/* Barras */}
                <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 6, 6]}>
                  <LabelList
                    dataKey="value"
                    position="right"
                    formatter={(v: any) =>
                      `R$ ${(v / 1_000_000).toFixed(1)} mi`
                    }
                    style={{
                      fill: "currentColor",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>

	  </div>
        </motion.div>
      </div>
    </section>
  );
}