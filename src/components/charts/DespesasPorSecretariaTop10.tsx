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

function DespesasPorSecretariaChart() {
  return (
    <div className="w-full h-[420px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={despesasSecretariaData}
          layout="vertical"
          margin={{ left: 80, right: 40, top: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

          <YAxis
            dataKey="label"
            type="category"
            width={190}
            tick={{ fill: "currentColor", fontSize: 12 }}
          />

          <XAxis
            type="number"
            tickFormatter={(v: number) =>
              `R${(v / 1_000_000).toFixed(1).replace(".", ",")} mi`
            }
            tick={{ fill: "currentColor", fontSize: 12 }}
          />

          <Tooltip
            formatter={(value: any) =>
              (value as number).toLocaleString("pt-BR", {
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
              formatter={(v: any) =>
                `R${(v / 1_000_000).toFixed(1).replace(".", ",")} mi`
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
  );
}

// named + default export (pra funcionar com dynamic e com imports antigos)
export { DespesasPorSecretariaChart };
export default DespesasPorSecretariaChart;