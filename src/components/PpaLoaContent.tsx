// src/components/PpaLoaContent.tsx
// Componente reutilizável para o conteúdo analítico de PPA/LOA.

import React from 'react';
import { AlertTriangle, BookOpen } from 'lucide-react';

export function PpaLoaContent() {
  return (
    // Componente wrapper para todo o conteúdo da análise
    <section className="space-y-10">
       
        {/* CICLO ORÇAMENTÁRIO (Mantido para contexto) */}
        <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-5 bg-card shadow-sm">
            <h3 className="font-semibold text-lg text-primary">PPA (Plano Plurianual 2026-2029)</h3>
            <p className="text-sm text-muted-foreground mt-1">
                É o Plano Estratégico – a lista de desejos. Ele mostra <strong>o que</strong> a Prefeitura quer construir, inovar e melhorar nos próximos quatro anos. É a <strong>VONTADE DE FAZER</strong>.
            </p>
            </div>

            <div className="rounded-xl border border-border p-5 bg-card shadow-sm">
            <h3 className="font-semibold text-lg text-primary">LOA (Lei Orçamentária Anual 2025)</h3>
            <p className="text-sm text-muted-foreground mt-1">
                É o Extrato Bancário Anual – o cheque do ano. Ela mostra <strong>quanto</strong> dinheiro a cidade realmente tem e <strong>como</strong> ele será distribuído em 2025. É a <strong>CAPACIDADE DE FAZER</strong>.
            </p>
            </div>

            <div className="rounded-xl border border-border p-5 bg-card shadow-sm bg-yellow-50/50 dark:bg-yellow-900/20">
            <h3 className="font-semibold text-lg text-yellow-700 dark:text-yellow-400">Nossa Missão</h3>
            <p className="text-sm text-yellow-700/80 dark:text-yellow-300/80 mt-1">
                A missão do Observatório Social é checar se a <strong>Vontade (PPA)</strong> é compatível com a <strong>Capacidade (LOA)</strong>.
            </p>
            </div>
        </div>
       
        {/* SEÇÃO 1: O GRANDE DIAGNÓSTICO */}
        <section className="space-y-8 py-8 border-t border-border">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                O Grande Diagnóstico: A Rigidez do Dinheiro de Taubaté
            </h2>
           
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl">
                Taubaté tem um orçamento total de <strong>R$ 2,578 Bilhões</strong> para 2025. Isso parece muito, mas a maior parte desse valor está <strong className="text-red-500">&apos;engessada&apos;</strong> ou <strong className="text-red-500">&apos;carimbada&apos;</strong>. Para entender onde a &apos;Vontade&apos; do PPA encontra a &apos;Realidade&apos; da LOA, precisamos dividir o orçamento em duas partes:
            </p>

            {/* TABELA DE CUSTEIO VS INVESTIMENTO */}
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-left text-gray-600 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">Tipo de Gasto</th>
                            <th scope="col" className="px-6 py-3">O que Significa?</th>
                            <th scope="col" className="px-6 py-3 text-right">Peso no Orçamento (2025)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">1. Custeio (Despesa Corrente)</td>
                            <td className="px-6 py-4">Pagar o dia a dia: Salários, contas de luz, combustível, remédios, manutenção de escolas. É pagar o PRESENTE.</td>
                            <td className="px-6 py-4 text-right font-bold text-red-600 dark:text-red-400">
                                Mais de R$ 2,3 Bilhões (Cerca de 90%)
                            </td>
                        </tr>

                        <tr className="bg-gray-50 dark:bg-gray-800/50">
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">2. Investimento (Despesa de Capital)</td>
                            <td className="px-6 py-4">Dinheiro para o futuro: Obras novas, compra de equipamentos, tecnologia. É construir o FUTURO (as metas do PPA).</td>
                            <td className="px-6 py-4 text-right font-bold text-green-600 dark:text-green-400">
                                Cerca de R$ 256 Milhões (Menos de 10%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* SEÇÃO 2: RISCO DE CORTE E AMBIÇÃO */}
        <section className="space-y-4 py-8 border-t border-border">
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 mr-3" /> A Pergunta Crítica: O PPA cabe em 10%?
            </h3>
           
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl font-semibold">
                Resposta Direta e Técnica: Não. O volume de metas ambiciosas do PPA não cabe nos menos de 10% de investimento livre da LOA.
            </p>

            <p className="text-md text-slate-600 dark:text-slate-400">
                A Prefeitura adota a metodologia moderna de Orçamento por Resultado (OPR) no PPA, prometendo inovações e grandes projetos de infraestrutura (como o Plano de Macrodrenagem). No entanto, o volume de recursos livres para essas obras é muito pequeno.
            </p>
           
            <div className="pl-6 pt-4 text-slate-700 dark:text-slate-300 space-y-3 border-l-4 border-dashed border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-lg">Isto significa que:</h4>

                <p>
                    <span className="font-bold">O Risco de Corte é Alto:</span> Obras e inovações (as promessas do PPA) são o primeiro alvo de cortes se a Receita Própria não for suficiente ou se os custos do dia a dia (custeio) aumentarem.
                </p>

                <p>
                    <span className="font-bold">A Ambição Pesa Demais:</span> O PPA é um plano de Estado, mas a LOA tem um problema de caixa que a impede de financiar esse plano com segurança.
                </p>
            </div>
        </section>

        {/* SEÇÃO 3: OS 3 GARGALOS DA LOA */}
        <section className="space-y-6 py-8 border-t border-border">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                Os 3 Maiores Inimigos do PPA (Os Gargalos da LOA)
            </h2>

            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl">
                Se o PPA é o mapa do tesouro, a LOA revela que a estrada para o tesouro está bloqueada em três pontos principais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                
                {/* Gargalo 1 */}
                <div className="p-5 border rounded-lg shadow-sm bg-red-50/50 dark:bg-red-900/20">
                    <h3 className="font-bold text-xl mb-2 text-red-700 dark:text-red-400">1. A Crise da Previdência (IPMT)</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                        O Tesouro de Taubaté tem que tirar dinheiro do próprio bolso (Recursos Livres) para cobrir o déficit da aposentadoria dos servidores (IPMT).
                    </p>
                    <p className="text-xs italic text-red-600 dark:text-red-300/80">
                        <strong>Bloqueio:</strong> Este repasse drena centenas de milhões de reais que poderiam estar financiando as obras e inovações do PPA. É um custo que cresce e <strong>&apos;rouba&apos;</strong> o investimento do futuro.
                    </p>
                </div>
                
                {/* Gargalo 2 */}
                <div className="p-5 border rounded-lg shadow-sm bg-blue-50/50 dark:bg-blue-900/20">
                    <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-400">2. Custos Rígidos (Custeio Alto)</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                        Educação (R$ 892 Mi) e Saúde (R$ 508 Mi) consomem mais da metade do orçamento, o que é obrigatório.
                    </p>
                    <p className="text-xs italic text-blue-600 dark:text-blue-300/80">
                      <strong>Bloqueio:</strong> Se estes grandes blocos não forem geridos com foco em Resultado (OPR), eles se tornam <strong>&apos;ralos de dinheiro&apos;</strong>, sem gerar o Impacto prometido no PPA.
                    </p>
                </div>

                {/* Gargalo 3 */}
                <div className="p-5 border rounded-lg shadow-sm bg-yellow-50/50 dark:bg-yellow-900/20">
                    <h3 className="font-bold text-xl mb-2 text-yellow-700 dark:text-yellow-400">3. Aposta Arriscada (Receita de Capital)</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                        A LOA conta com dinheiro de eventos não recorrentes, como a <strong>&apos;venda de bens públicos&apos;</strong> (Alienação de Bens), para compor o investimento.
                    </p>
                    <p className="text-xs italic text-yellow-600 dark:text-yellow-300/80">
                        <strong>Bloqueio:</strong> Se o município não conseguir vender esses bens, a pequena margem de investimento (menos de 10%) diminui drasticamente. O PPA fica refém de uma aposta.
                    </p>
                </div>
            </div>
        </section>

        {/* SEÇÃO 4: COBRANÇA DO CIDADÃO */}
        <section className="space-y-6 py-8 border-t border-border">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                O Que o Cidadão Deve Cobrar (Focando no OPR)
            </h2>

            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl">
                O lado positivo é que o PPA usa a linguagem moderna do Orçamento por Resultado (OPR). Isso permite que você faça cobranças mais inteligentes.
            </p>

            <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-4 mb-4">
                <p>Não pergunte: <span className='italic'>&quot;Quanto gastou?&quot;</span></p>
                <p className="text-2xl mt-1">Pergunte: <span className='italic'>&quot;Qual foi o RESULTADO e o IMPACTO desse gasto?&quot;</span></p>
            </div>
           
            {/* EXEMPLOS DE COBRANÇA */}
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-left text-gray-600 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">Programa no PPA</th>
                            <th scope="col" className="px-6 py-3">O que Cobrar de Fato?</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Programas de Limpeza/Serviços Públicos</td>
                            <td className="px-6 py-4">
                                O PPA mede em <em>Tonelada/Dia Coletada</em>. Cobrem: O número está melhorando? O gasto (LOA) está compatível com o resultado esperado no PPA?
                            </td>
                        </tr>

                        <tr className="bg-gray-50 dark:bg-gray-800/50">
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Programas de Saúde</td>
                            <td className="px-6 py-4">
                                O PPA deve ter indicadores de <em>Resultado</em> (ex: Redução do Tempo de Espera para Especialistas). Cobrem: O dinheiro da LOA está reduzindo a fila ou apenas mantendo custos?
                            </td>
                        </tr>

                        <tr className="bg-white dark:bg-gray-800">
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Programas de Inovação e Gestão</td>
                            <td className="px-6 py-4">
                                O PPA promete modernização. Cobrem: Qual o plano do governo para reduzir o custo de custeio e liberar dinheiro para investimento? A inovação está gerando eficiência real?
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* ASIDE FINAL */}
        <aside className="rounded-xl border border-dashed border-border p-6 mt-12 bg-blue-50 dark:bg-blue-900/20">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Objetivo do Radar Taubaté</h3>
            <p className="text-md text-slate-700 dark:text-slate-300">
            Do PPA à execução: mostramos onde o planejamento entrega, onde trava e onde precisa melhorar. Inteligência pública para transformar intenção em resultado real.
            </p>
        </aside>
    </section>
  );
}
