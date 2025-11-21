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

const despesasSecretariaData = [
  { label: "Saúde", value: 420_000_000 },
  { label: "Educação", value: 380_000_000 },
  { label: "Obras", value: 120_000_000 },
  { label: "Administração", value: 98_000_000 },
  { label: "Segurança", value: 42_000_000 },
  { label: "Assistência Social", value: 28_000_000 },
  { label: "Esportes", value: 21_000_000 },
  { label: "Cultura", value: 18_000_000 },
  { label: "Mobilidade Urbana", value: 15_000_000 },
  { label: "Meio Ambiente", value: 12_000_000 },
];

function DespesasPorSecretariaTop10() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 480;

  return (
    <div className="w-full overflow-x-hidden">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={despesasSecretariaData}
          layout="vertical"
          margin={{
            top: 20,
            left: isMobile ? 10 : 40,
            right: isMobile ? 10 : 40,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

          <YAxis
            dataKey="label"
            type="category"
            width={isMobile ? 80 : 160}
            tick={{
              fontSize: isMobile ? 10 : 12,
              fill: "currentColor",
            }}
          />

          <XAxis
            type="number"
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(1)} mi`}
            tick={{ fill: "currentColor", fontSize: isMobile ? 10 : 12 }}
          />

          <Tooltip
            formatter={(v: number) =>
              v.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }
            contentStyle={{
              backgroundColor: "rgba(15,23,42,0.9)",
              borderRadius: 10,
              border: "none",
              color: "white",
            }}
          />

          <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 6, 6]}>
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v: number) => `R$ ${(v / 1_000_000).toFixed(1)} mi`}
              style={{
                fill: "currentColor",
                fontSize: isMobile ? 10 : 12,
                fontWeight: 600,
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export { DespesasPorSecretariaTop10 };
export default DespesasPorSecretariaTop10;