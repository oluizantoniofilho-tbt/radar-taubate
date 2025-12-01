
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

import ChartWrapper from "./ChartWrapper"; // ← PADRÃO OFICIAL

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
    <ChartWrapper
      title="Despesa com Pessoal – Executivo (% da RCL)"
      description="A despesa com pessoal do Executivo oscilou entre 39% e 50% da RCL ao longo da década. Em 2023, atingiu 50,63%, acima dos patamares considerados saudáveis."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          {/* Grid leve e elegante */}
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />

          {/* Eixo X */}
          <XAxis
            dataKey="ano"
            stroke="#94A3B8"
            tick={{ fontSize: 12 }}
          />

          {/* Eixo Y */}
          <YAxis
            domain={[35, 60]}
            stroke="#94A3B8"
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 12 }}
          />

          {/* Limite da LRF – 54% */}
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

          {/* Limite prudencial – 51.3% */}
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

          {/* Tooltip padronizado */}
          <Tooltip
            formatter={(v: number) => `${v.toFixed(2)}%`}
            labelFormatter={(label) => `Ano: ${label}`}
            contentStyle={{
              backgroundColor: "rgba(30,41,59,0.9)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          />

          {/* Linha principal */}
          <Line
            type="monotone"
            dataKey="valor"
            stroke="#EAB308"
            strokeWidth={3}
            dot={{ r: 5, fill: "#EAB308" }}
            activeDot={{ r: 7 }}
            name="Despesa com Pessoal"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
