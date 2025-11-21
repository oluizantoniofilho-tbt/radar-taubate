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
  Legend,
} from "recharts";

// Dados finais (Top 10)
const despesasSecretariaData = [
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

function DespesasPorSecretariaChart() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 480;

  return (
    <div className="w-full overflow-hidden">
      <ResponsiveContainer width="100%" height={460}>
        <BarChart
          data={despesasSecretariaData}
          layout="vertical"
          margin={{ left: isMobile ? 50 : 80, right: 20, top: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

          {/* Eixo Y (categorias) */}
          <YAxis
            dataKey="label"
            type="category"
            width={isMobile ? 100 : 180}
            tick={{ fontSize: isMobile ? 10 : 12 }}
          />

          {/* Eixo X (valores) */}
          <XAxis
            type="number"
            tickFormatter={(v) =>
              `R$ ${(v / 1_000_000).toFixed(1)} mi`
            }
            tick={{ fontSize: isMobile ? 10 : 12 }}
          />

          {/* Tooltip BR */}
          <Tooltip
            formatter={(v) =>
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

          {/* Legend */}
          <Legend
            wrapperStyle={{ fontSize: 12 }}
          />

          {/* BARRA */}
          <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 6, 6]}>
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v:number) => `R$ ${(v / 1_000_000).toFixed(1)} mi`}
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

// Suporte a imports antigos e dinâmicos
export { DespesasPorSecretariaChart };
export default DespesasPorSecretariaChart;