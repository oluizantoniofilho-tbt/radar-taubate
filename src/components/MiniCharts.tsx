"use client";

import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { motion } from "framer-motion";

export default function MiniCharts() {
  // === Dados demo ===
  const evolucao = [
    { mes: "Jan", receita: 8.5, despesa: 7.8 },
    { mes: "Fev", receita: 8.9, despesa: 8.1 },
    { mes: "Mar", receita: 9.2, despesa: 8.4 },
    { mes: "Abr", receita: 9.0, despesa: 8.7 },
    { mes: "Mai", receita: 9.8, despesa: 8.9 },
    { mes: "Jun", receita: 9.5, despesa: 9.0 },
  ];

  const secretarias = [
    { nome: "Educação", valor: 35 },
    { nome: "Saúde", valor: 28 },
    { nome: "Infraestrutura", valor: 20 },
    { nome: "Desenvolvimento Social", valor: 10 },
    { nome: "Administração", valor: 7 },
  ];

  const composicao = [
    { nome: "Impostos", valor: 55 },
    { nome: "Transferências", valor: 35 },
    { nome: "Outros", valor: 10 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

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
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={evolucao}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="mes" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip />
              <Line type="monotone" dataKey="receita" stroke="#4ade80" strokeWidth={2} />
              <Line type="monotone" dataKey="despesa" stroke="#f87171" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Secretarias */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-md"
        >
          <h3 className="text-lg font-semibold mb-3">Top 5 Secretarias por Gasto</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={secretarias}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="nome" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip />
              <Bar dataKey="valor" fill="#60a5fa" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Composição da Receita */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-md"
        >
          <h3 className="text-lg font-semibold mb-3">Composição da Receita</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={composicao}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={70}
                fill="#8884d8"
                dataKey="valor"
              >

{composicao.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}