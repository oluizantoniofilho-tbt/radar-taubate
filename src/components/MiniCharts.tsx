
"use client";

import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { motion } from "framer-motion";
import { 
    evolucaoData, 
    secretariasData, 
    composicaoData, 
    PIE_CHART_COLORS,
    ISecretaria
} from "@/lib/data/charts-data";

export default function MiniCharts() {
  
  // Estado reativo para a secretaria ativa no gráfico de barras
  const [activeSecretary, setActiveSecretary] = React.useState<ISecretaria | null>(null);

  return (
    <section className="container mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-center mb-10"
      >
        Panorama Fiscal de Taubaté
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Evolução Mensal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-md"
        >
          <h3 className="text-lg font-semibold mb-3">Evolução Mensal</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={evolucaoData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="mes" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip />
              <Line type="monotone" dataKey="receita" name="Receita (em milhões)" stroke="#4ade80" strokeWidth={2} />
              <Line type="monotone" dataKey="despesa" name="Despesa (em milhões)" stroke="#f87171" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Secretarias */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-md text-center"
        >
            <h3 className="text-lg font-semibold mb-3 flex items-center justify-center gap-2">
                🏛️ Top 5 Secretarias por Gasto
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={secretariasData}
                onMouseLeave={() => setActiveSecretary(null)}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="nome" stroke="#999" hide={true} />
                <YAxis stroke="#999" />
                <Tooltip
                    cursor={{fill: 'rgba(96, 165, 250, 0.1)'}}
                    formatter={(value: number) =>
                        new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                            maximumFractionDigits: 0,
                        }).format(value * 1000000)
                    }
                />
                <Bar
                    dataKey="valor"
                    name="Gasto (em milhões)"
                    fill="#60a5fa"
                    radius={[6, 6, 0, 0]}
                    onMouseEnter={(_, index) => setActiveSecretary(secretariasData[index])}
                />
              </BarChart>
            </ResponsiveContainer>

            {/* Exibição dinâmica */}
            <div className="mt-4 text-sm text-gray-200 h-10 flex flex-col justify-center">
                <p className="font-semibold text-base transition-opacity duration-300">
                    {activeSecretary ? activeSecretary.nome : "Passe o mouse sobre as barras"}
                </p>
                {activeSecretary && (
                <p className="text-blue-400 font-bold text-lg transition-opacity duration-300">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        maximumFractionDigits: 0,
                    }).format(activeSecretary.valor * 1000000)}
                </p>
                )}
            </div>
        </motion.div>

        {/* Composição da Receita */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-md"
        >
          <h3 className="text-lg font-semibold mb-3">Composição da Receita</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
            <Pie
                data={composicaoData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="valor"
                nameKey="nome"
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
              >
                {composicaoData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number, name: string) => `[${value}%, name]`}
              /> 
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
