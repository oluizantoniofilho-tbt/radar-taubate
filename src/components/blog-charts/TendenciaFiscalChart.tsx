
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function TendenciaFiscalChart() {
  const data = [
    {
      ano: 2025,
      ResultadoOrcamentario: -130000000,
      RCL: 2100000000,
      PessoalPercentual: 48.0,
    },
    {
      ano: 2026,
      ResultadoOrcamentario: -80000000,
      RCL: 2220000000,
      PessoalPercentual: 47.0,
    },
    {
      ano: 2027,
      ResultadoOrcamentario: -30000000,
      RCL: 2350000000,
      PessoalPercentual: 46.0,
    },
    {
      ano: 2028,
      ResultadoOrcamentario: 10000000,
      RCL: 2470000000,
      PessoalPercentual: 45.0,
    },
  ];

  return (
    <div className="w-full h-[420px] bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Tendência Fiscal — Projeção 2025–2028
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

          <XAxis dataKey="ano" stroke="#9CA3AF" />
          <YAxis
            yAxisId="left"
            stroke="#1E40AF"
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(0)} mi`}
          />
          <YAxis
            yAxisId="right"
            stroke="#EAB308"
            orientation="right"
            tickFormatter={(v) => `${v}%`}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.9)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "#fff",
            }}
            formatter={(value, name) => {
              if (name === "PessoalPercentual") return `${value}%`;
              return `R$ ${value.toLocaleString("pt-BR")}`;
            }}
          />

          <Legend />

          {/* Resultado Orçamentário */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="ResultadoOrcamentario"
            stroke="#dc2626"
            strokeDasharray="5 5"
            name="Resultado Orçamentário"
            dot={{ r: 4 }}
          />

          {/* RCL */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="RCL"
            stroke="#1E3A8A"
            name="RCL"
            dot={{ r: 4 }}
          />

          {/* Pessoal (% RCL) */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="PessoalPercentual"
            stroke="#EAB308"
            name="% Pessoal / RCL"
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
