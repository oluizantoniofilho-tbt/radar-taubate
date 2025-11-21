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

const topGastosMunicipaisData = [
  { label: "Folha de Pagamento", value: 464_576_000 },
  { label: "Santa Casa de Misericórdia Chavantes", value: 135_859_700 },
  { label: "Instituto de Previdência do Município", value: 130_213_000 },
  { label: "Fundação Caixa Beneficente UNITAU", value: 71_416_750 },
  { label: "Instituto Esperança", value: 54_879_250 },
  { label: "Ecotaubaté Ambiental", value: 48_586_720 },
  { label: "SHA Comércio de Alimentos", value: 40_145_700 },
  { label: "Tribunal de Justiça de SP", value: 23_807_750 },
  { label: "Milclean Serviços", value: 21_822_060 },
  { label: "ABC Transporte Coletivo", value: 17_477_400 },
];

function TopGastosMunicipaisChart() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 480;

  return (
    <div className="w-full overflow-x-hidden">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={topGastosMunicipaisData}
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
            width={isMobile ? 80 : 200}
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

          <Bar dataKey="value" fill="#22c55e" radius={[6, 6, 6, 6]}>
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

export { TopGastosMunicipaisChart };
export default TopGastosMunicipaisChart;