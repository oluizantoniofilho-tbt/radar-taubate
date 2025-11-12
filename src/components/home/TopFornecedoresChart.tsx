'use client'
import * as React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const dataTop10 = [
  { credor: "Folha de Pagamento – 45.176.005/0001-08", valor: 464576000 },
  { credor: "Santa Casa de Misericórdia Chavantes – 73.027.xxx/xxxx-xx", valor: 135859700 },
  { credor: "Instituto de Previdência do Município de Taubaté – 7x.xxx.xxx/xxxx-xx", valor: 130213000 },
  { credor: "Fundação Caixa Beneficente dos Servidores da Univ. de Taubaté", valor: 71416750 },
  { credor: "Instituto Esperança – 10.779.749/0001-32", valor: 54879250 },
  { credor: "Ecotaubaté Ambiental S/A – 24.890.764/0001-68", valor: 48586720 },
  { credor: "Sha Comércio de Alimentos Ltda. – 61.980.272/0001-90", valor: 40145700 },
  { credor: "Tribunal de Justiça do Estado de São Paulo (TJSP)", valor: 23807750 },
  { credor: "Milclean Comércio e Serviços Ltda. – 02.666.114/0001-45", valor: 21822060 },
  { credor: "ABC Transporte Coletivo Vale do Paraíba Ltda. – 45.xxx.xxx/xxxx-xx", valor: 17477400 }
];

export function TopFornecedoresChart() {
  const formatValue = (v: number) => `R$ ${(v / 1_000_000).toFixed(1)} mi`
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Top 10 Fornecedores Municipais (Jan–Nov 2025)</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={dataTop10} layout="vertical" margin={{ top: 5, right: 30, left: 150, bottom: 5 }}>
                    <XAxis type="number" tickFormatter={formatValue} stroke="#9CA3AF" />
                    <YAxis dataKey="credor" type="category" width={250} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                    <Tooltip formatter={(v) => formatValue(Number(v))}             contentStyle={{
                    backgroundColor: 'rgba(31, 41, 55, 0.8)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#FFF'
                  }} />
                    <Bar dataKey="valor" fill="#1E40AF" radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-8 bg-blue-50 dark:bg-neutral-800/50 rounded-xl p-6 text-sm leading-relaxed border border-blue-200/50 dark:border-blue-500/20">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">💬 Insights rápidos</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>A <strong>folha de pagamento</strong> representa o maior gasto, cerca de 55% do total das 10 maiores despesas.</li>
                <li>Despesas obrigatórias (pessoal, previdência, saúde) dominam o orçamento.</li>
                <li><strong>Santa Casa</strong> e <strong>Instituto Esperança</strong> reforçam o peso da área de saúde.</li>
                <li><strong>Ecotaubaté Ambiental</strong> mostra o impacto do saneamento e coleta de resíduos.</li>
                <li>Contratos de alimentação e limpeza (<strong>Sha, Milclean</strong>) refletem a terceirização de serviços essenciais.</li>
                </ul>
            </div>
        </div>
    </section>
  )
}
