
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

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

export default function RclEvolucaoChart() {
  return (
    <div className="w-full h-96 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Evolução da Receita Corrente Líquida (RCL) — 2015 a 2024
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.1)"
          />
          <XAxis
            dataKey="ano"
            stroke="#9CA3AF"
            tick={{ fill: "#9CA3AF" }}
          />
          <YAxis
            stroke="#9CA3AF"
            tickFormatter={(v) =>
              `R$ ${(v / 1_000_000).toFixed(0)} mi`
            }
          />
          <Tooltip
            formatter={(v: number) =>
              `R$ ${v.toLocaleString("pt-BR")}`
            }
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.9)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="rcl"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4, fill: "#3b82f6" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
