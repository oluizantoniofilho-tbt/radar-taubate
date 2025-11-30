


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
    { ano: 2025, ResultadoOrcamentario: -130000000, RCL: 2100000000, PessoalPercentual: 48.0 },
    { ano: 2026, ResultadoOrcamentario: -80000000,  RCL: 2220000000, PessoalPercentual: 47.0 },
    { ano: 2027, ResultadoOrcamentario: -30000000,  RCL: 2350000000, PessoalPercentual: 46.0 },
    { ano: 2028, ResultadoOrcamentario: 10000000,   RCL: 2470000000, PessoalPercentual: 45.0 },
  ];


  return (
    <div className="w-full h-[420px] bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Tendência Fiscal — Projeção 2025–2028
      </h3>


      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 25, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.15)" />


          {/* Eixo X */}
          <XAxis
            dataKey="ano"
            stroke="#9CA3AF"
            tick={{ fontSize: 12 }}
          />


          {/* Eixo Y — lados diferentes */}
          <YAxis
            yAxisId="left"
            stroke="#3B82F6"
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(0)} mi`}
          />


          <YAxis
            yAxisId="right"
            stroke="#EAB308"
            orientation="right"
            tickFormatter={(v) => `${v}%`}
          />


          {/* Tooltip corrigido */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.95)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: 10,
            }}
            formatter={(value, name) => {
              if (name === "PessoalPercentual") {
                return [`${value}%`, "% Pessoal / RCL"];
              }
              if (name === "ResultadoOrcamentario") {
                return [`R$ ${value.toLocaleString("pt-BR")}`, "Resultado Orçamentário"];
              }
              if (name === "RCL") {
                return [`R$ ${value.toLocaleString("pt-BR")}`, "RCL"];
              }
              return value;
            }}
            labelFormatter={(label) => `Ano: ${label}`}
          />


          {/* Legenda aprimorada */}
          <Legend
            wrapperStyle={{ paddingTop: 12 }}
            formatter={(value) => {
              if (value === "ResultadoOrcamentario") return "Resultado Orçamentário";
              if (value === "PessoalPercentual") return "% Pessoal / RCL";
              return value;
            }}
          />


          {/* Linhas */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="ResultadoOrcamentario"
            stroke="#DC2626"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />


          <Line
            yAxisId="left"
            type="monotone"
            dataKey="RCL"
            stroke="#1E40AF"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />


          <Line
            yAxisId="right"
            type="monotone"
            dataKey="PessoalPercentual"
            stroke="#EAB308"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

