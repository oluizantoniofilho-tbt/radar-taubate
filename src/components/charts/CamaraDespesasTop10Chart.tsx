"use client";

import React from 'react'; // Import explícito para garantir compatibilidade
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from "recharts";
import { camaraDespesasTop10Data } from '../../lib/data/charts-data';
const data = [
  { name: "Vencimentos Fixos", value: 20909693.0 },
  { name: "Obrigações Patronais", value: 2957414.88 },
  { name: "Auxílio Alimentação", value: 2294556.03 },
  { name: "Obrigações (2)", value: 1553597.27 },
  { name: "Indenizações", value: 1264928.24 },
  { name: "Exercícios Anteriores", value: 1018996.86 },
  { name: "Equipamentos", value: 857439.77 },
  { name: "Serviços PJ", value: 579460.82 },
  { name: "TI", value: 376147.95 },
];

// Função auxiliar para formatar os valores monetários completos
const currencyFormatter = (value: number) => 
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });


export default function CamaraDespesasTop10Chart() {
  return (
    // 'overflow-x-auto' está no pai, mas mantemos aqui para garantir o comportamento em diferentes contextos
    <div className="w-full h-96 p-4 bg-white dark:bg-slate-900 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 dark:text-white text-center">
        Top 10 Despesas Executadas — Câmara Municipal (2025)
      </h2>

      {/* min-w-[600px] obriga o gráfico a ter largura mínima, ativando a rolagem horizontal no wrapper da página */}
      <div className="min-w-[600px] h-full">
        {/* h-[80%] para deixar espaço para o título */}
        <ResponsiveContainer width="100%" height="80%"> 
          <BarChart data={data} layout="vertical" margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
            {/* Eixo X: Valores numéricos (Despesa). Exibido em Milhões (M) */}
            <XAxis 
              type="number" 
              tickFormatter={(v: number) => (v / 1000000).toFixed(1) + 'M'} 
              stroke="#6B7280"
            />
            {/* Eixo Y: Categorias (Nomes das despesas) */}
            <YAxis
              type="category"
              dataKey="name"
              width={140} // Largura reservada para os rótulos de nome
              stroke="#6B7280"
              // Não truncamos o nome no YAxis para que o Tooltip mostre o nome completo. 
              // A largura fixa resolve o problema de sobreposição.
            />

            {/* Tooltip com formatação completa de moeda */}
            <Tooltip 
              formatter={(v: number) => [currencyFormatter(v), 'Despesa']} 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
            />

            <Bar dataKey="value" fill="#DC2626" radius={[4, 4, 4, 4]}>
              {/* LabelList: Valor exibido à direita da barra */}
              <LabelList
                dataKey="value"
                position="right"
                formatter={currencyFormatter}
                className="text-xs dark:text-white"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
