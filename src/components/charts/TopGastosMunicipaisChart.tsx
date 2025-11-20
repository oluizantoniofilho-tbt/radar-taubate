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

const gastosData = [
  { label: "Folha de Pagamento", value: 464576000 },
  { label: "Santa Casa de Chavantes", value: 135859700 },
  { label: "Instituto de Previdência", value: 130213000 },
  { label: "Fundação UNITAU", value: 71416750 },
  { label: "Instituto Esperança", value: 54879250 },
  { label: "Ecotaubaté Ambiental", value: 48586720 },
  { label: "SHA Alimentos", value: 40145700 },
  { label: "Tribunal de Justiça de SP", value: 23807750 },
  { label: "Milclean Serviços", value: 21822060 },
  { label: "ABC Transportes", value: 17477400 },
];

export function TopGastosMunicipaisChart() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Top 10 Gastos Municipais
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            As maiores despesas pagas pelo município ao longo do ano.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="h-[430px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={gastosData}
                layout="vertical"
                margin={{ top: 20, right: 40, left: 80, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

                <YAxis
                  dataKey="label"
                  type="category"
                  width={200}
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

                <Bar dataKey="value" fill="#10b981" radius={[6, 6, 6, 6]}>
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
        title="O que revelam os maiores gastos da cidade"

        >
        <div className="space-y-4">
          <p>
            Este ranking apresenta os maiores pagamentos realizados pela
            prefeitura. Ele permite identificar os principais contratos,
            serviços essenciais e obrigações financeiras contínuas.
          </p>
          <p>
            Gastos elevados não são necessariamente ruins. Muitos representam
            serviços essenciais, como limpeza urbana, saúde e educação.
          </p>
          <p>
            A função do observatório é permitir que qualquer cidadão acompanhe
            esses números, compreenda sua importância e cobre eficiência,
            transparência e resultados.
          </p>
        </div>
      </InsightsDrawer>
    </section>
  );
}