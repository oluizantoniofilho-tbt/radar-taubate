
"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  { ano: 2016, valor: 49.72 },
  { ano: 2017, valor: 48.36 },
  { ano: 2018, valor: 46.43 },
  { ano: 2019, valor: 46.18 },
  { ano: 2020, valor: 43.02 },
  { ano: 2021, valor: 39.19 },
  { ano: 2022, valor: 44.41 },
  { ano: 2023, valor: 50.63 },
  { ano: 2024, valor: 47.20 },
];

export default function DespesaPessoalRCLChart() {
  return (
    <div className="w-full h-[420px] bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Despesa com Pessoal – Executivo (% da RCL)
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

          <XAxis
            dataKey="ano"
            stroke="#9CA3AF"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            domain={[35, 60]}
            stroke="#9CA3AF"
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 12 }}
          />

          {/* Linha do limite da LRF (54%) */}
          <ReferenceLine
            y={54}
            stroke="#DC2626"
            strokeDasharray="5 5"
            label={{
              position: "right",
              value: "Limite LRF (54%)",
              fill: "#DC2626",
              fontSize: 12,
            }}
          />

          {/* Linha do limite prudencial (51.3%) */}
          <ReferenceLine
            y={51.3}
            stroke="#F59E0B"
            strokeDasharray="5 5"
            label={{
              position: "right",
              value: "Prudencial (51,3%)",
              fill: "#F59E0B",
              fontSize: 12,
            }}
          />

          <Tooltip
            formatter={(v: number) => `${v.toFixed(2)}%`}
            labelFormatter={(label) => `Ano: ${label}`}
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.9)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: "8px",
            }}
          />

          <Line
            type="monotone"
            dataKey="valor"
            stroke="#EAB308"
            strokeWidth={3}
            dot={{ r: 5, fill: "#EAB308" }}
            name="Despesa com Pessoal (% RCL)"
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
        A despesa com pessoal do Executivo oscilou entre 39% e 50% da RCL ao
        longo da década. Em 2023, atingiu 50,63%, muito próximo do limite
        prudencial da LRF e acima de patamares considerados saudáveis.
      </p>
    </div>
  );
}
