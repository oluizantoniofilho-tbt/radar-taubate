
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
} from "recharts";
import { AnalyticCard } from "@/components/ui/AnalyticCard";

// Top 10 despesas por secretaria (valores de exemplo / ajuste conforme seus dados reais)
const despesasPorSecretariaData = [
  { label: "Secretaria de Educação", value: 430_055_300 },
  { label: "Fundo Municipal de Saúde", value: 390_021_100 },
  { label: "Secretaria da Fazenda", value: 99_386_450 },
  { label: "Secretaria de Serviços Públicos", value: 73_133_240 },
  { label: "Secretaria de Obras", value: 68_554_900 },
  { label: "Administração", value: 51_774_320 },
  { label: "Desenvolvimento Social", value: 44_210_800 },
  { label: "Gabinete do Prefeito", value: 32_998_500 },
  { label: "Segurança", value: 27_441_900 },
  { label: "Planejamento", value: 21_389_700 },
];

// Formata tooltip em R$
const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export function DespesasPorSecretariaChart() {
  return (
    <AnalyticCard
      title="Despesas por Secretaria — Top 10"
      subtitle="Visualize as secretarias com maior volume de gastos no período analisado."
      delay={0.2}
    >
      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={despesasPorSecretariaData}
            layout="vertical"
            margin={{ top: 16, right: 16, left: 0, bottom: 16 }}
          >
            <XAxis
              type="number"
              tickFormatter={(value) =>
                `R$ ${(value as number / 1_000_000).toFixed(0)} mi`
              }
              tick={{ fontSize: 12, fill: "currentColor" }}
            />

            <YAxis
              type="category"
              dataKey="label"
              width={200}
              tick={{ fontSize: 11, fill: "currentColor" }}
            />

            <Tooltip
              formatter={(value) => formatCurrency(value as number)}
              labelFormatter={(label) => label}
              contentStyle={{
                backgroundColor: "rgba(15,23,42,0.95)",
                borderRadius: 10,
                border: "none",
                color: "white",
              }}
            />

            <Bar dataKey="value" radius={[4, 4, 4, 4]} fill="#0ea5e9">
              <LabelList
                dataKey="value"
                position="right"
                formatter={(value: any) =>
                  `R$ ${(Number(value) / 1_000_000).toFixed(0)} mi`
                }
                style={{ fontSize: 11, fill: "currentColor" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </AnalyticCard>
  );
}