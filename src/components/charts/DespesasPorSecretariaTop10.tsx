
"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  CartesianGrid
} from "recharts";

// Dados do gráfico (temporários)
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
  { label: "Meio Ambiente", value: 12000000 }
];

export function DespesasPorSecretariaChart() {
  return (
    <div
      className="
        bg-white dark:bg-slate-900/70 
        backdrop-blur-sm 
        border border-slate-300/40 dark:border-slate-700/40 
        shadow-lg rounded-xl 
        p-6
      "
    >
      <ResponsiveContainer width="100%" height={460}>
        <BarChart
          data={despesasSecretariaData}
          layout="vertical"
          margin={{ left: 80, right: 40, top: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

          <YAxis
            dataKey="label"
            type="category"
            width={180}
            tick={{ fill: "currentColor", fontSize: 12 }}
          />

          <XAxis
            type="number"
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(1)} mi`}
            tick={{ fill: "currentColor", fontSize: 12 }}
          />

          <Tooltip
            formatter={(v: any) =>
              v.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })
            }
            contentStyle={{
              backgroundColor: "rgba(15,23,42,0.9)",
              borderRadius: 10,
              border: "none",
              color: "white"
            }}
          />

          <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 6, 6]}>
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v: any) => `R$ ${(v / 1_000_000).toFixed(1)} mi`}
              style={{
                fill: "currentColor",
                fontSize: 12,
                fontWeight: 600
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}