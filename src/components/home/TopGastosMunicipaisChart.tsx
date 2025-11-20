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
  Cell,
} from "recharts";
import { topGastosMunicipaisData } from "@/lib/data/charts-data";

export function TopGastosMunicipaisChart() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
        Top 10 Gastos Municipais
      </h2>

      <div className="w-full h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topGastosMunicipaisData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="label"
              tick={{ fill: "#475569", fontSize: 12 }}
              interval={0}
            />
            <YAxis
              tick={{ fill: "#475569", fontSize: 12 }}
              tickFormatter={(value) =>
                Intl.NumberFormat("pt-BR", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(value)
              }
            />
            <Tooltip
              formatter={(value: number) =>
                `R$ ${value.toLocaleString("pt-BR")}`
              }
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {topGastosMunicipaisData.map((item, index) => (
                <Cell key={index} fill="#16a34a" /> // verde institucional
              ))}
              <LabelList
                dataKey="value"
                position="top"
                formatter={(value: number) =>
                  `R$ ${value.toLocaleString("pt-BR")}`
                }
                style={{ fill: "#0f172a", fontSize: 12 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}