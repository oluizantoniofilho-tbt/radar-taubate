
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
  { ano: 2016, valor: 5935967.08 },
  { ano: 2017, valor: -10678385.08 },
  { ano: 2018, valor: -64425983.52 },
  { ano: 2019, valor: -67233211.26 },
  { ano: 2020, valor: -41284205.02 },
  { ano: 2021, valor: -12831900.16 },
  { ano: 2022, valor: -144450088.49 },
  { ano: 2023, valor: -162048384.30 },
  { ano: 2024, valor: -128226713.04 },
];

export default function ExecucaoOrcamentariaChart() {
  return (
    <div className="w-full h-[420px] bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md">
      
      {/* TÍTULO • Igual ao Tendência Fiscal */}
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Resultado da Execução Orçamentária (2016–2024)
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 25, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.15)" />

          <XAxis
            dataKey="ano"
            stroke="#9CA3AF"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            stroke="#9CA3AF"
            tick={{ fontSize: 12 }}
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(0)} mi`}
          />

          {/* LINHA ZERO */}
          <ReferenceLine y={0} stroke="#ffffff40" strokeWidth={2} />

          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31,41,55,0.95)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: 10,
            }}
            formatter={(v) => [`R$ ${v.toLocaleString("pt-BR")}`, "Resultado"]}
            labelFormatter={(label) => `Ano: ${label}`}
          />

          <Line
            type="monotone"
            dataKey="valor"
            stroke="#DC2626"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Resultado (R$)"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* RODAPÉ • Corrigido com respiro maior */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-8 leading-relaxed">
        Valores negativos indicam déficit orçamentário — quando o município gastou
        mais do que arrecadou. O gráfico revela 8 anos consecutivos de déficit,
        com destaque para 2018, 2019, 2022 e 2023.
      </p>
    </div>
  );
}



