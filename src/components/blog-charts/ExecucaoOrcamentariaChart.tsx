
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import ChartWrapper from "./ChartWrapper"; // ← USANDO O WRAPPER PADRÃO

const data = [
  { ano: 2016, valor: 5935967.08, perc: 0.58 },
  { ano: 2017, valor: -10678385.08, perc: -0.99 },
  { ano: 2018, valor: -64425983.52, perc: -5.47 },
  { ano: 2019, valor: -67233211.26, perc: -5.47 },
  { ano: 2020, valor: -41284205.02, perc: -3.15 },
  { ano: 2021, valor: -12831900.16, perc: -0.90 },
  { ano: 2022, valor: -144450088.49, perc: -9.39 },
  { ano: 2023, valor: -162048384.30, perc: -8.51 },
  { ano: 2024, valor: -128226713.04, perc: -5.99 },
];

export default function ExecucaoOrcamentariaChart() {
  return (
    <ChartWrapper
      title="Resultado da Execução Orçamentária (2016–2024)"
      description="O município fecha no vermelho há 8 anos consecutivos, evidenciando perda de liquidez e deterioração fiscal."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(148,163,184,0.25)"
          />

          <XAxis
            dataKey="ano"
            stroke="#94A3B8"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            stroke="#94A3B8"
            tick={{ fontSize: 12 }}
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(0)} mi`}
          />

          <ReferenceLine y={0} stroke="#CBD5E1" strokeWidth={2} />

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

          <Line
            type="monotone"
            dataKey="valor"
            stroke="#DC2626"
            strokeWidth={3}
            dot={{ r: 4, fill: "#DC2626" }}
            activeDot={{ r: 6 }}
            name="Resultado"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}






