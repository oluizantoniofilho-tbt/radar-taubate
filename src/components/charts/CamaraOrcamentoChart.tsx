"use client";

import React from 'react'; // Import explícito para corrigir o erro UMD global
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from "recharts";
import { camaraOrcamentoData } from '../../lib/data/charts-data';

const data = [
  { label: "Orçado", value: 45600000 },
  { label: "Empenhado", value: 34911105.97 },
  { label: "Liquidado", value: 33327680.69 },
  { label: "Pago", value: 32954885.97 },
];

// Função auxiliar para formatar os valores monetários
const currencyFormatter = (value: number) => 
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function CamaraOrcamentoChart() {
  return (
    // Removendo o min-w daqui e confiando no wrapper da página principal.
    // Usamos um height fixo e o ResponsiveContainer garante a largura máxima.
    <div className="w-full h-96 p-4 bg-white dark:bg-slate-900 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-8 dark:text-white text-center">
        Execução Orçamentária da Câmara (Ano Vigente)
      </h2>

      {/* Definimos uma altura fixa (h-full) para o container de dados */}
      <ResponsiveContainer width="100%" height="70%">
        <BarChart 
          data={data} 
          layout="vertical" 
          margin={{ top: 10, right: 10, bottom: 0, left: 10 }} // Margens ajustadas para telas menores
        >
          {/* Eixo X (Valores numéricos) - Formatando como BRL */}
          <XAxis 
            type="number" 
            tickFormatter={(v: number) => (v / 1000000).toFixed(1) + 'M'} // Mostra em Milhões
            stroke="#6B7280" // Cor para dark mode
          />
          {/* Eixo Y (Categorias: Orçado, Empenhado, etc.) */}
          <YAxis 
            type="category" 
            dataKey="label" 
            width={120} 
            stroke="#6B7280" 
          />

          {/* Tooltip com formatação completa de moeda */}
          <Tooltip 
            formatter={(v: number) => [currencyFormatter(v), 'Valor']} 
            contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
          />

          <Bar dataKey="value" fill="#1E40AF" radius={[4, 4, 4, 4]}>
            {/* Cores diferentes para destacar o Orçado */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.label === 'Orçado' ? '#93C5FD' : '#1E40AF'} />
            ))}
            
            {/* LabelList: Valor exibido à direita da barra */}
            <LabelList
              dataKey="value"
              position="right"
              formatter={currencyFormatter}
              className="text-sm dark:text-white"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}