"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import { camaraDespesasTop10Data as data } from "../../lib/data/charts-data";

// Formatação de moeda
const currencyFormatter = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function CamaraDespesasTop10Chart() {
  return (
    <div className="w-full h-96 p-4 bg-white dark:bg-slate-900 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 dark:text-white text-center">
        Top 10 Despesas Executadas — Câmara Municipal (2025)
      </h2>

      {/* Wrapper com largura mínima para funcionar bem em mobile */}
      <div className="min-w-[600px] h-full">
        <ResponsiveContainer width="100%" height="85%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, bottom: 10, right: 20, left: 0 }}
          >
            {/* Grid suave */}
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

            {/* Eixo X (numérico) */}
            <XAxis
              type="number"
              tickFormatter={(v) =>
                v >= 1_000_000 ? `${(v / 1_000_000).toFixed(1)}M` :  `${v}`
            }
              stroke="#6B7280"
            />

            {/* Eixo Y removido para ganhar espaço */}
            <XAxis type="category" dataKey="name" hide />

            {/* Tooltip — nome correto + valor formatado */}
            <Tooltip
              cursor={{ opacity: 0.15 }}
              formatter={(value, _name, props: any) => [
                currencyFormatter(value as number),
                props?.payload?.name || "Despesa",
              ]}
              contentStyle={{
                backgroundColor: "#1F2937",
                borderRadius: "8px",
                border: "none",
              }}
              labelStyle={{ color: "#fff" }}
            />

            {/* As barras */}
            <Bar
              dataKey="value"
              fill="#DC2626"
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
