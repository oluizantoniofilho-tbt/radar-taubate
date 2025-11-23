"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

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

// Formatador de moeda
const currencyFormatter = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function CamaraDespesasTop10Chart() {
  return (
    <div className="w-full h-96 p-3 bg-white dark:bg-slate-900 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4 dark:text-white text-center">
        Top 10 Despesas Executadas — Câmara Municipal (2025)
      </h2>

      <div className="w-full h-[82%]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            {/* Valores em milhões */}
            <XAxis
              type="number"
              tickFormatter={(v: number) => (v / 1_000_000).toFixed(1) + "M"}
              stroke="#6B7280"
            />

            {/* Categorias (nome da despesa) — escondidas para dar mais espaço */}
            <YAxis type="category" dataKey="name" hide />

            {/* Tooltip moderno */}
            <Tooltip
              cursor={{ opacity: 0.1 }}
              formatter={(value: number, _name, props: any) => [
                currencyFormatter(value),
                props?.payload?.name || "Despesa",
              ]}
              contentStyle={{
                backgroundColor: "#1F2937",
                borderRadius: "8px",
                border: "none",
              }}
              labelStyle={{ color: "#fff" }}
            />

            {/* Barras */}
            <Bar dataKey="value" fill="#DC2626" radius={[4, 4, 4, 4]}>
              <LabelList
                dataKey="value"
                position="right"
                formatter={(v: number) =>
                  v.toLocaleString("pt-BR", {
                    minimumFractionDigits: 0,
                  })
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
