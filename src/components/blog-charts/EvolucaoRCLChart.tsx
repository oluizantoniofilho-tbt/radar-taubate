
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

/*
   GRÁFICO: Evolução da Receita Corrente Líquida (2015–2024)

   Dados enviados:
   - anos
   - valores nominais da RCL
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
    <div className="w-full h-[420px] bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Evolução da Receita Corrente Líquida (2015–2024)
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
            stroke="#9CA3AF"
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(0)} mi`}
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            formatter={(v: number) => `R$ ${v.toLocaleString("pt-BR")}`}
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
            dataKey="rcl"
            stroke="#2563EB"
            strokeWidth={3}
            dot={{ r: 5, fill: "#2563EB" }}
            name="RCL (R$)"
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
        A RCL mostra a força financeira estrutural do município.  
        Entre 2015 e 2024, Taubaté mais que dobrou sua receita recorrente — um crescimento
        extremamente alto para cidades do mesmo porte.
      </p>
    </div>
  );
}
