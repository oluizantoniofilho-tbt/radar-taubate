"use client";

import React from "react";
import Link from "next/link";

type Trend = "up" | "down" | "flat";

type Card = {
  id: number;
  title: string;
  value: string;
  trend: Trend;
  color: string;      // classes Tailwind do fundo
  textColor: string;  // classes Tailwind do texto
  link: string;
  description: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "Total de Receitas",
    value: "R$ 50.000.000,00",
    trend: "up",
    color: "from-emerald-600 to-emerald-700",
    textColor: "text-white",
    link: "/indicadores",
    description: "Receitas arrecadadas (base demo).",
  },
  {
    id: 2,
    title: "Total de Despesas",
    value: "R$ 45.000.000,00",
    trend: "down",
    color: "from-rose-600 to-rose-700",
    textColor: "text-white",
    link: "/indicadores",
    description: "Despesas liquidadas (base demo).",
  },
  {
    id: 3,
    title: "Saldo Atual",
    value: "R$ 5.000.000,00",
    trend: "flat",
    color: "from-sky-600 to-sky-700",
    textColor: "text-white",
    link: "/indicadores",
    description: "Diferença receitas – despesas (base demo).",
  },
];

export default function DashboardCards() {
  return (
    <section className="container mx-auto px-4 -mt-16">
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-2xl p-6 shadow-xl bg-gradient-to-br ${`cards.color`} ${`cards.textColor`} hover:shadow-2xl transition-all duration-300`}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">{`cards.title`}</h3>
              <span className="text-xl opacity-80">
                {`cards.trend === "up" ? "↗️" : cards.trend === "down" ? "↘️" : "≍"`}
              </span>
            </div>

            <p className="mt-3 text-3xl font-extrabold tracking-tight">
              {`cards.value`}
            </p>

            <p className="mt-2 text-sm opacity-80">Atualizado: nov/2025</p>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm opacity-90">{card.description}</p>
              <Link
                href={card.link}
                className="ml-3 inline-flex items-center rounded-lg bg-white/15 px-3 py-1 text-sm font-medium hover:bg-white/25"
              >
                Saiba mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}