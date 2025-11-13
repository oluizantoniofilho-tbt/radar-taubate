"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const data = [
  { label: "Orçado", value: 45600000 },
  { label: "Empenhado", value: 34911105.97 },
  { label: "Liquidado", value: 33327680.69 },
  { label: "Pago", value: 32954885.97 },
];

export function CamaraOrcamentoChart() {
  return (
    <div className="w-full h-80 p-4 bg-white dark:bg-slate-900 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Orçamento da Câmara Municipal (Ano Vigente)
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 50 }}>
          <XAxis type="number" tickFormatter={(v: number) => v.toLocaleString("pt-BR")} />
          <YAxis type="category" dataKey="label" width={120} />
          <Tooltip formatter={(v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} />
          <Bar dataKey="value" fill="#1E40AF" radius={[4, 4, 4, 4]}>
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              className="text-sm dark:text-white"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}