
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
    <div className="w-full h-[360px] sm:h-[420px] bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 sm:p-6 shadow overflow-hidden">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Resultado da Execução Orçamentária (2016–2024)
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

          <XAxis
            dataKey="ano"
            stroke="#9CA3AF"
            tick={{ fontSize: 10 }}
          />

          <YAxis
            stroke="#9CA3AF"
            tick={{ fontSize: 10 }}
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(0)} mi`}
          />

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
            dot={{ r: 4, fill: "#DC2626" }}
            activeDot={{ r: 6 }}
            name="Resultado (R$)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}




