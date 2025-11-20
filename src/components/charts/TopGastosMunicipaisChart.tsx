
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
  { label: "Folha de Pagamento", value: 464576000 },
  { label: "Santa Casa de Chavantes", value: 135859700 },
  { label: "Instituto de Previdência", value: 130213000 },
  { label: "Fundação Caixa Beneficente", value: 71416750 },
  { label: "Instituto Esperança", value: 54879250 },
  { label: "Ecotaubaté Ambiental", value: 48586720 },
  { label: "SHA Comércio de Alimentos", value: 40145700 },
  { label: "TJSP", value: 23807750 },
  { label: "Milclean Serviços", value: 21822060 },
  { label: "ABC Transporte", value: 17477400 },
];

export function TopGastosMunicipaisChart() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Top 10 Gastos Municipais
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            As maiores despesas pagas pelo município.
          </p>
        </div>

        {/* Card Externo */}
        <div className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40 shadow-lg rounded-xl p-6">

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

                <Bar dataKey="value" fill="#22c55e" radius={[6, 6, 6, 6]}>
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