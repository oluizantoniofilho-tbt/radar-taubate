"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import InsightsDrawer from "@/components/home/InsightsDrawer";

// Raw data as provided
const rawData = [
  { name: "Secretaria de Educação", value: 430055300 },
  { name: "Fundo Municipal de Saúde", value: 390021100 },
  { name: "Secretaria da Fazenda", value: 99386450 },
  { name: "Secretaria de Serviços Públicos", value: 73133240 },
  { name: "Secretaria de Segurança Pública Municipal", value: 27474410 },
  { name: "Fundo Municipal de Assistência Social", value: 26701080 },
  { name: "Secretaria de Obras", value: 25190030 },
  { name: "Secretaria de Administração", value: 24036030 },
  { name: "Secretaria de Mobilidade Urbana", value: 24030710 },
  { name: "Secretaria de Saúde (Admin. Direta)", value: 11613220 },
  { name: "Secretaria de Esportes", value: 11508090 },
  { name: "Fundo de Iluminação Pública", value: 10721320 },
  { name: "Secretaria de Cultura", value: 9274740 },
  { name: "Fundo de Assistência ao Esporte Amador", value: 9215490 },
  { name: "Procuradoria Geral", value: 9050780 },
  { name: "Desenvolvimento e Inclusão Social", value: 8989880 },
  { name: "Fundo Municipal de Transporte", value: 7759680 },
  { name: "Sec. Governo e Relações Institucionais", value: 6425940 },
  { name: "Secretaria de Gabinete", value: 6077560 },
  { name: "Meio Ambiente", value: 5207080 },
];

// Process data to get Top 10 and "Outras"
const sortedData = [...rawData].sort((a, b) => b.value - a.value);
const top10Data = sortedData.slice(0, 10);
const otherData = sortedData.slice(10);
const othersSum = otherData.reduce((acc, curr) => acc + curr.value, 0);

const chartData = [
  ...top10Data,
  { name: "Outras Secretarias", value: othersSum },
].sort((a, b) => b.value - a.value);

const formatValue = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-gray-800 p-4 text-white shadow-lg">
        <p className="font-semibold">{label}</p>
        <p className="text-sm">{formatValue(payload[0].value)}</p>
      </div>
    );
  }
  return null;
};

export function DespesasPorSecretariaTop10() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="h-full w-full rounded-xl bg-white p-6 shadow-lg dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
          Despesas por Secretaria
        </h3>
      </div>
      <div
        style={{ width: "100%", height: 400 }}
        className="mt-6 flex-grow"
      >
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              className="text-xs"
              width={140}
              interval={0}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
            <Bar dataKey="value" barSize={20} radius={[4, 4, 4, 4]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="var(--color-primary)" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="mt-4 inline-block rounded-xl px-5 py-2 font-semibold text-white bg-[var(--color-primary)] hover:bg-[#00257A] transition shadow-md"
        >
          Saiba mais
        </button>
      </div>
        <InsightsDrawer
  isOpen={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
  title="Despesas por Secretaria – Top 10 + Outras"
>
  <p>📌 Educação e Saúde dominam o orçamento, concentrando cerca de 60% das despesas pagas.</p>
  <p>📌 Fazenda e Serviços Públicos vêm logo atrás, refletindo despesas operacionais e contratos de infraestrutura.</p>
  <p>📌 A presença de diversos fundos municipais revela descentralização orçamentária.</p>
  <p>📌 Áreas culturais e esportivas têm participação moderada, mas importante no conjunto.</p>
        </InsightsDrawer>

      
    </div>
  );
}