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

// Dados — sem CNPJ
const topGastosMunicipaisData = [
  { label: "Folha de Pagamento", value: 464576000 },
  { label: "Santa Casa de Misericórdia Chavantes", value: 135859700 },
  { label: "Instituto de Previdência do Município", value: 130213000 },
  { label: "Fundação Caixa Beneficente UNITAU", value: 71416750 },
  { label: "Instituto Esperança", value: 54879250 },
  { label: "Ecotaubaté Ambiental", value: 48586720 },
  { label: "SHA Comércio de Alimentos", value: 40145700 },
  { label: "Tribunal de Justiça de SP", value: 23807750 },
  { label: "Milclean Serviços", value: 21822060 },
  { label: "ABC Transporte Coletivo", value: 17477400 },
];

export function TopGastosMunicipaisChart() {
  return (
    <div
      className="
        bg-white dark:bg-slate-900/70 
        backdrop-blur-sm 
        border border-slate-300/40 dark:border-slate-700/40 
        shadow-lg rounded-xl 
        p-6
      "
    >
      <ResponsiveContainer width="100%" height={460}>
        <BarChart
          data={topGastosMunicipaisData}
          layout="vertical"
          margin={{ left: 80, right: 40, top: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

          {/* Categorias */}
          <YAxis
            dataKey="label"
            type="category"
            width={200}
            tick={{ fill: "currentColor", fontSize: 12 }}
          />

          {/* Escala monetária */}
          <XAxis
            type="number"
            tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(1)} mi`}
            tick={{ fill: "currentColor", fontSize: 12 }}
          />

          {/* Tooltip formatado */}
          <Tooltip
            formatter={(v: any) =>
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

          {/* Barras */}
          <Bar dataKey="value" fill="#16a34a" radius={[6, 6, 6, 6]}>
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v: any) => `R$ ${(v / 1_000_000).toFixed(1)} mi`}
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