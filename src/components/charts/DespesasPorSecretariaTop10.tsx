"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  CartesianGrid,
} from "recharts";

const data = [
  { label: "Saúde", value: 420000000 },
  { label: "Educação", value: 380000000 },
  { label: "Obras", value: 120000000 },
  { label: "Administração", value: 98000000 },
  { label: "Segurança", value: 42000000 },
  { label: "Assistência Social", value: 28000000 },
  { label: "Esportes", value: 21000000 },
  { label: "Cultura", value: 18000000 },
  { label: "Mobilidade Urbana", value: 15000000 },
  { label: "Meio Ambiente", value: 12000000 },
];

export function DespesasPorSecretariaTop10() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Despesas por Secretaria — Top 10
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Visualize as secretarias com maior volume de gastos da administração municipal.
          </p>
        </div>

        {/* Card Externo (padrão FiscalOverview) */}
        <div className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40 shadow-lg rounded-2xl p-6">

          {/* Card Interno */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-md">

            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                data={data}
                layout="vertical"
                margin={{ left: 120, right: 40, top: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.12} />

                <YAxis
                  dataKey="label"
                  type="category"
                  width={180}
                  tick={{ fill: "currentColor", fontSize: 13 }}
                />

                <XAxis
                  type="number"
                  tickFormatter={(v) =>
                    `R$ ${(v / 1_000_000).toFixed(1)} mi`
                  }
                  tick={{ fill: "currentColor", fontSize: 12 }}
                />

                <Tooltip
                  formatter={(v: any) =>
                    v.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  }
                  contentStyle={{
                    backgroundColor: "rgba(15,23,42,0.92)",
                    borderRadius: "12px",
                    border: "none",
                    color: "white",
                    padding: "10px",
                  }}
                />

                <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 6, 6]}>
                  <LabelList
                    dataKey="value"
                    position="right"
                    formatter={(v: any) =>
                      `R$ ${(v / 1_000_000).toFixed(1)} mi`
                    }
                    style={{
                      fill: "currentColor",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}