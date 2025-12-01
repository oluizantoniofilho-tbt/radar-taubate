
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

import ChartWrapper from "./ChartWrapper"; // ← PADRÃO OFICIAL

export default function TendenciaFiscalChart() {
  const data = [
    { ano: 2025, ResultadoOrcamentario: -130000000, RCL: 2100000000, PessoalPercentual: 48.0 },
    { ano: 2026, ResultadoOrcamentario: -80000000,  RCL: 2220000000, PessoalPercentual: 47.0 },
    { ano: 2027, ResultadoOrcamentario: -30000000,  RCL: 2350000000, PessoalPercentual: 46.0 },
    { ano: 2028, ResultadoOrcamentario: 10000000,   RCL: 2470000000, PessoalPercentual: 45.0 },
  ];

  return (
    <ChartWrapper
      title="Tendência Fiscal — Projeção 2025–2028"
      description="A projeção fiscal aponta possível estabilização em 2027 e capacidade moderada de recuperação em 2028. O principal desafio continua sendo a rigidez estrutural da despesa."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 15 }}
        >
          {/* Grid padronizado */}
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />

          {/* Eixo X */}
          <XAxis
            dataKey="ano"
            stroke="#94A3B8"
            tick={{ fontSize: 12 }}
          />

          {/* Eixo Y esquerdo — valores em R$ */}
          <YAxis
            yAxisId="left"
            stroke="#1E40AF"
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(0)} mi`}
            tick={{ fontSize: 12 }}
          />

          {/* Eixo Y direito — percentual */}
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#EAB308"
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 12 }}
          />

          {/* Tooltip padronizado */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(30,41,59,0.95)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: 10,
              fontSize: "14px",
            }}
            formatter={(value, name) => {
              if (name === "PessoalPercentual")
                return [`${value}%`, "% Pessoal / RCL"];
              return [
                `R$ ${value.toLocaleString("pt-BR")}`,
                name === "RCL" ? "RCL" : "Resultado Orçamentário",
              ];
            }}
            labelFormatter={(label) => `Ano: ${label}`}
          />

          {/* Legenda padronizada */}
          <Legend
            wrapperStyle={{ paddingTop: 12 }}
            formatter={(value) => {
              if (value === "ResultadoOrcamentario") return "Resultado Orçamentário";
              if (value === "PessoalPercentual") return "% Pessoal / RCL";
              if (value === "RCL") return "RCL";
              return value;
            }}
          />

          {/* Linhas */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="ResultadoOrcamentario"
            stroke="#DC2626"
            strokeDasharray="5 5"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

          <Line
            yAxisId="left"
            type="monotone"
            dataKey="RCL"
            stroke="#1E40AF"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="PessoalPercentual"
            stroke="#EAB308"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
