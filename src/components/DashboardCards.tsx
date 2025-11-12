
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Scale } from "lucide-react";

type Trend = "up" | "down" | "flat";

interface Card {
  id: number;
  title: string;
  value: string;
  trend: Trend;
  description: string;
  link: string;
  gradient: string;
  icon: React.ReactNode;
}

// === Dados dos Cards ===
const CARDS: Card[] = [
  {
    id: 1,
    title: "Receitas Arrecadadas",
    value: "R$ 50.000.000,00",
    trend: "up",
    description: "Total de receitas arrecadadas (base demo).",
    link: "/indicadores",
    gradient: "from-green-500/80 to-green-600/90",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Despesas Liquidadas",
    value: "R$ 45.000.000,00",
    trend: "down",
    description: "Total de despesas liquidadas (base demo).",
    link: "/indicadores",
    gradient: "from-red-500/80 to-red-600/90",
    icon: <TrendingDown className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Saldo Atual",
    value: "R$ 5.000.000,00",
    trend: "flat",
    description: "Diferença entre receitas e despesas (base demo).",
    link: "/indicadores",
    gradient: "from-blue-500/80 to-blue-600/90",
    icon: <Scale className="w-6 h-6 text-white" />,
  },
];

export default function DashboardCards() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Resumo Fiscal 2025
        </h2>
        <p className="text-gray-300 text-sm mt-1">
          Indicadores consolidados até novembro de 2025
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {CARDS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`relative bg-gradient-to-br ${item.gradient} rounded-2xl shadow-xl p-6 flex flex-col justify-between text-white overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-2xl" />

            <div className="relative z-10 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/10 rounded-lg">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              {item.trend === "up" && <span className="text-xl">⬆️</span>}
              {item.trend === "down" && <span className="text-xl">⬇️</span>}
              {item.trend === "flat" && <span className="text-xl">⟷</span>}
            </div>

            <div className="relative z-10">
              <p className="text-3xl font-bold mb-2">{item.value}</p>
              <p className="text-sm opacity-80">Atualizado: nov/2025</p>
            </div>

            <div className="relative z-10 mt-4">
              <p className="text-sm opacity-90 mb-3">{item.description}</p>
              <Link
                href={item.link}
                className="inline-block text-center bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1.5 rounded-md transition-all duration-200"
              >
                Saiba mais →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}