
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
  ReferenceLine,
} from "recharts";

/*  
   GRÁFICO: Resultado da Execução Orçamentária (2016–2024)

   Dados enviados por você:
   - valores reais (R$)
   - percentuais (% da RCL)
*/

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
    <div className="w-full h-[420px] bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Resultado da Execução Orçamentária (2016–2024)
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
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

          {/* Linha do zero para clareza */}
          <ReferenceLine y={0} stroke="#ffffff55" strokeWidth={2} />

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
            dataKey="valor"
            stroke="#DC2626"
            strokeWidth={3}
            dot={{ r: 5, fill: "#DC2626" }}
            name="Resultado (R$)"
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
        Valores negativos indicam déficit orçamentário — quando o município gastou mais do que arrecadou.
        O gráfico revela **8 anos consecutivos de déficit**, com destaque para 2018, 2019, 2022 e 2023.
      </p>
    </div>
  );
}

