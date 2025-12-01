
"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ChartWrapper from "./ChartWrapper"; // ← padrão oficial

/*
   GRÁFICO: Evolução da Receita Corrente Líquida (2015–2024)
*/

const data = [
  { ano: 2015, rcl: 808243593.77 },
  { ano: 2016, rcl: 855563733.74 },
  { ano: 2017, rcl: 894206457.61 },
  { ano: 2018, rcl: 948203282.78 },
  { ano: 2019, rcl: 992301101.60 },
  { ano: 2020, rcl: 1081526425.43 },
  { ano: 2021, rcl: 1249399635.22 },
  { ano: 2022, rcl: 1319335546.25 },
  { ano: 2023, rcl: 1671970239.82 },
  { ano: 2024, rcl: 1849503147.33 },
];

export default function EvolucaoRCLChart() {
  return (
    <ChartWrapper
      title="Evolução da Receita Corrente Líquida (2015–2024)"
      description="A RCL mostra a força financeira estrutural do município. Entre 2015 e 2024, Taubaté mais que dobrou sua receita recorrente — um crescimento extremamente alto para cidades do mesmo porte."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          {/* Grid padronizado */}
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />

          {/* Eixo X */}
          <XAxis
            dataKey="ano"
            stroke="#94A3B8"
            tick={{ fontSize: 12 }}
          />

          {/* Eixo Y com formatação em milhões */}
          <YAxis
            stroke="#94A3B8"
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(0)} mi`}
            tick={{ fontSize: 12 }}
          />

          {/* Tooltip padronizado */}
          <Tooltip
            formatter={(v: number) => `R$ ${v.toLocaleString("pt-BR")}`}
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
            dataKey="rcl"
            stroke="#2563EB"
            strokeWidth={3}
            dot={{ r: 5, fill: "#2563EB" }}
            activeDot={{ r: 7 }}
            name="RCL (R$)"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

