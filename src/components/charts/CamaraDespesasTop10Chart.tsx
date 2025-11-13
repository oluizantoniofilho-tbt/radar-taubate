"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const data = [
  { name: "Vencimentos Fixos", value: 20909693.0 },
  { name: "Obrigações Patronais", value: 2957414.88 },
  { name: "Auxílio Alimentação", value: 2294556.03 },
  { name: "Obrigações (2)", value: 1553597.27 },
  { name: "Indenizações", value: 1264928.24 },
  { name: "Exercícios Anteriores", value: 1018996.86 },
  { name: "Equipamentos", value: 857439.77 },
  { name: "Serviços PJ", value: 579460.82 },
  { name: "TI", value: 376147.95 },
];

export function CamaraDespesasTop10Chart() {
  return (
    <div className="w-full h-96 p-4 bg-white dark:bg-slate-900 rounded-xl shadow overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Top 10 Despesas Executadas — Câmara Municipal (2025)
      </h2>

      <div className="min-w-[600px] h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 120 }}>
            <XAxis type="number" tickFormatter={(v: number) => v.toLocaleString("pt-BR")} />
            <YAxis
              type="category"
              dataKey="name"
              width={140}
              tickFormatter={(v: string) => v.length > 18 ? v.slice(0, 18) + "..." : v}
            />
            <Tooltip formatter={(v: number) =>
              v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
            } />
            <Bar dataKey="value" fill="#475569" radius={[4, 4, 4, 4]}>
              <LabelList
                dataKey="value"
                position="right"
                formatter={(v: number) =>
                  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                }
                className="text-xs dark:text-white"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}