'use client';

import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";
import InsightsDrawer from "@/components/home/InsightsDrawer";

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

export function DespesasPorSecretariaTop10() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* TITULO */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Despesas por Secretaria — Top 10
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Onde o orçamento municipal é mais concentrado.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="h-[430px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={despesasSecretariaData}
                layout="vertical"
                margin={{ top: 20, right: 40, left: 80, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

                <YAxis
                  dataKey="label"
                  type="category"
                  width={180}
                  tick={{ fill: "currentColor" }}
                />

                <XAxis
                  type="number"
                  tickFormatter={(v) => `R$ ${(v / 1_000_000).toFixed(1)} mi`}
                  tick={{ fill: "currentColor" }}
                />

                <Tooltip
                  formatter={(v: any) =>
                    v.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  }
                  contentStyle={{
                    background: "rgba(15,15,15,0.85)",
                    borderRadius: 8,
                    border: "none",
                    color: "#fff",
                  }}
                />

                <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 6, 6]}>
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

          <div className="text-right mt-4">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 mt-4 text-sm font-semibold rounded-xl shadow bg-white dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-600 transition-all"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>

      <InsightsDrawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Como interpretar as despesas por secretaria"

        >
        <div className="space-y-4">
          <p>
            Este ranking apresenta as secretarias que mais concentram recursos
            no orçamento municipal. Ele ajuda a revelar prioridades, gargalos
            e áreas estratégicas da gestão pública.
          </p>
          <p>
            Secretarias como Saúde e Educação, por exemplo, naturalmente têm
            maior volume de recursos devido à complexidade dos serviços.
          </p>
          <p>
            Ao acompanhar a evolução desses valores ano a ano, o cidadão pode
            entender se o município está investindo onde realmente importa — e
            cobrar eficiência, planejamento e transparência.
          </p>
        </div>
      </InsightsDrawer>
    </section>
  );
}