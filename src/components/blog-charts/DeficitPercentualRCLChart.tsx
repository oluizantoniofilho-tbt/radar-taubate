
"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import ChartWrapper from "./ChartWrapper"; // ← PADRÃO OFICIAL

const data = [
  { ano: 2016, valor: 0.58 },
  { ano: 2017, valor: -0.99 },
  { ano: 2018, valor: -5.47 },
  { ano: 2019, valor: -5.47 },
  { ano: 2020, valor: -3.15 },
  { ano: 2021, valor: -0.90 },
  { ano: 2022, valor: -9.39 },
  { ano: 2023, valor: -8.51 },
  { ano: 2024, valor: -5.99 },
];

export default function DeficitPercentualRCLChart() {
  return (
    <ChartWrapper
      title="Déficit Orçamentário como % da RCL (2016–2024)"
      description="O déficit orçamentário se manteve negativo por oito anos consecutivos, atingindo picos críticos em 2018, 2019, 2022 e 2023. Déficits acima de 5% da RCL são considerados severos e refletem graves restrições fiscais."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 15, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />

          <XAxis
            dataKey="ano"
            stroke="#94A3B8"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            stroke="#94A3B8"
            tick={{ fontSize: 12 }}
            tickFormatter={(v) => `${v}%`}
          />

          <ReferenceLine y={0} stroke="#CBD5E1" strokeWidth={2} />

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

          <Bar
            dataKey="valor"
            radius={[4, 4, 4, 4]}
            shape={(props: any) => {
              const { x, y, width, height, value } = props;
              const cor = value >= 0 ? "#16A34A" : "#DC2626";
              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={cor}
                  rx={4}
                />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}


