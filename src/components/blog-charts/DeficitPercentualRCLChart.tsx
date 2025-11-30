

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
    <div className="w-full h-[420px] bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Déficit Orçamentário como % da RCL (2016–2024)
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

          {/* Eixo X */}
          <XAxis
            dataKey="ano"
            stroke="#9CA3AF"
            tick={{ fontSize: 12 }}
          />

          {/* Eixo Y centralizado no zero */}
          <YAxis
            stroke="#9CA3AF"
            tick={{ fontSize: 12 }}
            tickFormatter={(v) => `${v}%`}
          />

          {/* Linha zero */}
          <ReferenceLine y={0} stroke="#6B7280" />

          {/* Tooltip */}
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

          {/* Barras – verde para superávit, vermelho para déficit */}
          <Bar
            dataKey="valor"
            shape={(props: any) => {
              const { fill, x, y, width, height, value } = props;
              const cor =
                value >= 0 ? "#16A34A" : "#DC2626"; // verde ou vermelho
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

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
        O déficit orçamentário se manteve negativo por oito anos consecutivos,
        atingindo picos críticos em 2018, 2019, 2022 e 2023. Déficits acima de
        5% da RCL são considerados severos e refletem graves restrições fiscais.
      </p>
    </div>
  );
}
