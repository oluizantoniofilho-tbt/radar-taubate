// src/app/planejamento/page.tsx

import React from "react";
import Link from "next/link";
// Importar Lucide Icons para os ícones de alertas
import { AlertTriangle, BookOpen, DollarSign } from 'lucide-react';

export const metadata = {
  title: "Planejamento Público (PPA & LOA) | Radar Taubaté",
  description:
    "Entenda o ciclo orçamentário do município: PPA e LOA, com acesso aos documentos oficiais.",
};

export default function PlanejamentoPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-16 min-h-screen bg-white dark:bg-gray-900">
      
      {/* CABEÇALHO E INTRODUÇÃO (Ajustado) */}
      <header className="space-y-4 mb-12">
        <span className="inline-flex items-center text-sm font-semibold text-blue-600 bg-blue-100 rounded-full px-3 py-1 dark:bg-blue-900 dark:text-blue-300">
            <BookOpen className="w-4 h-4 mr-2" /> Desvendando o Orçamento de Taubaté
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          [cite_start]R$ 2,5 Bilhões para Taubaté. Construindo o Futuro ou Pagando o Presente? [cite: 2]
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-5xl">
          [cite_start]Todos os anos, a Prefeitura decide o que fará (PPA) e quanto vai custar (LOA)[cite: 4]. [cite_start]Esses são os dois documentos mais importantes da cidade[cite: 5].
        </p>
      </header>
      
      {/* CICLO ORÇAMENTÁRIO (Mantido) */}
      <div className="grid gap-4 sm:grid-cols-3 mb-12">
        <div className="rounded-xl border border-border p-5 bg-card shadow-sm">
          [cite_start]<h3 className="font-semibold text-lg text-primary">PPA (Plano Plurianual 2026-2029) [cite: 6]</h3>
          <p className="text-sm text-muted-foreground mt-1">
            [cite_start]É o Plano Estratégico – a lista de desejos[cite: 6]. [cite_start]Ele mostra **o que** a Prefeitura quer construir, inovar e melhorar nos próximos quatro anos[cite: 7]. [cite_start]É a **VONTADE DE FAZER**[cite: 8].
          </p>
        </div>
        <div className="rounded-xl border border-border p-5 bg-card shadow-sm">
          [cite_start]<h3 className="font-semibold text-lg text-primary">LOA (Lei Orçamentária Anual 2025) [cite: 9]</h3>
          <p className="text-sm text-muted-foreground mt-1">
            [cite_start]É o Extrato Bancário Anual – o cheque do ano[cite: 9]. [cite_start]Ela mostra **quanto** dinheiro a cidade realmente tem e **como** ele será distribuído em 2025[cite: 10]. [cite_start]É a **CAPACIDADE DE FAZER**[cite: 10].
          </p>
        </div>
        <div className="rounded-xl border border-border p-5 bg-card shadow-sm bg-yellow-50/50 dark:bg-yellow-900/20">
          <h3 className="font-semibold text-lg text-yellow-700 dark:text-yellow-400">Nossa Missão</h3>
          <p className="text-sm text-yellow-700/80 dark:text-yellow-300/80 mt-1">
            [cite_start]A missão do Observatório Social é checar se a **Vontade (PPA)** é compatível com a **Capacidade (LOA)**[cite: 11].
          </p>
        </div>
      </div>
      
      {/* NOVO CONTEÚDO: O GRANDE DIAGNÓSTICO */}
      <section className="space-y-8 py-8 border-t border-border">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            [cite_start]O Grande Diagnóstico: A Rigidez do Dinheiro de Taubaté [cite: 12]
        </h2>
        
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl">
            [cite_start]Taubaté tem um orçamento total de **R$ 2,578 Bilhões** para 2025. Isso parece muito, mas a maior parte desse valor está **"engessada"** ou **"carimbada"**[cite: 13].
            [cite_start]Para entender onde a "Vontade" do PPA encontra a "Realidade" da LOA, precisamos dividir o orçamento em duas partes[cite: 14]:
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
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">1. [cite_start]Custeio (Despesa Corrente) [cite: 15]</td>
                        <td className="px-6 py-4">Pagar o dia a dia: Salários, contas de luz, manutenção de escolas. [cite_start]É pagar o **PRESENTE**[cite: 15].</td>
                        <td className="px-6 py-4 text-right font-bold text-red-600 dark:text-red-400">
                            [cite_start]Mais de R$ 2,3 Bilhões (Cerca de 90%) [cite: 15]
                        </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">2. [cite_start]Investimento (Despesa de Capital) [cite: 15]</td>
                        <td className="px-6 py-4">Dinheiro para o futuro: Obras novas, compra de equipamentos, tecnologia. [cite_start]É construir o **FUTURO** (as metas do PPA)[cite: 15].</td>
                        <td className="px-6 py-4 text-right font-bold text-green-600 dark:text-green-400">
                            [cite_start]Cerca de R$ 256 Milhões (Menos de 10%) [cite: 15]
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      {/* RISCO DE CORTE E AMBIÇÃO */}
      <section className="space-y-4 py-8 border-t border-border">
        <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 flex items-center mb-4">
            [cite_start]<AlertTriangle className="w-6 h-6 mr-3" /> A Pergunta Crítica: O PPA cabe em 10%? [cite: 16]
        </h3>
        
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl font-semibold">
            Resposta Direta e Técnica: Não. [cite_start]O volume de metas ambiciosas do PPA não cabe nos menos de 10% de investimento livre da LOA[cite: 17].
        </p>

        <p className="text-md text-slate-600 dark:text-slate-400">
            [cite_start]A Prefeitura adota a metodologia moderna de Orçamento por Resultado (OPR) no PPA, prometendo inovações e grandes projetos de infraestrutura (como o Plano de Macrodrenagem)[cite: 18]. [cite_start]No entanto, o volume de recursos livres para essas obras é muito pequeno[cite: 19].
        </p>
        
        <div className="pl-6 pt-4 text-slate-700 dark:text-slate-300 space-y-3 border-l-4 border-dashed border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-lg">Isto significa que:</h4>
            <p>
                [cite_start]<span className="font-bold">O Risco de Corte é Alto:</span> Obras e inovações (as promessas do PPA) são o primeiro alvo de cortes se a Receita Própria não for suficiente ou se os custos do dia a dia (custeio) aumentarem[cite: 21].
            </p>
            <p>
                [cite_start]<span className="font-bold">A Ambição Pesa Demais:</span> O PPA é um plano de Estado, mas a LOA tem um problema de caixa que a impede de financiar esse plano com segurança[cite: 22].
            </p>
        </div>
      </section>

      {/* OS 3 GARGALOS DA LOA */}
      <section className="space-y-6 py-8 border-t border-border">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            [cite_start]Os 3 Maiores Inimigos do PPA (Os Gargalos da LOA) [cite: 23]
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl">
            [cite_start]Se o PPA é o mapa do tesouro, a LOA revela que a estrada para o tesouro está bloqueada em três pontos principais[cite: 24].
        </p>

        {/* TABELA DE GARGALOS (Inimigos do PPA) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Gargalo 1: Crise da Previdência */}
            <div className="p-5 border rounded-lg shadow-sm bg-red-50/50 dark:bg-red-900/20">
                <h3 className="font-bold text-xl mb-2 text-red-700 dark:text-red-400">1. A Crise da Previdência (IPMT)</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    [cite_start]O Tesouro de Taubaté tem que tirar dinheiro do próprio bolso (Recursos Livres) para cobrir o déficit da aposentadoria dos servidores (IPMT)[cite: 25].
                </p>
                <p className="text-xs italic text-red-600 dark:text-red-300/80">
                    [cite_start]**Bloqueio:** Este repasse drena centenas de milhões de reais que poderiam financiar obras e inovações do PPA, roubando o investimento do futuro[cite: 25].
                </p>
            </div>
            {/* Gargalo 2: Custos Rígidos (Custeio) */}
            <div className="p-5 border rounded-lg shadow-sm bg-blue-50/50 dark:bg-blue-900/20">
                <h3 className="font-bold text-xl mb-2 text-blue-700 dark:text-blue-400">2. Custos Rígidos (Custeio Alto)</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    [cite_start]Educação (R$ 892 Mi) e Saúde (R$ 508 Mi) consomem mais da metade do orçamento, o que é obrigatório[cite: 25].
                </p>
                <p className="text-xs italic text-blue-600 dark:text-blue-300/80">
                    [cite_start]**Bloqueio:** Se estes grandes blocos não forem geridos com foco em Resultado (OPR), tornam-se ralos de dinheiro, sem gerar o Impacto prometido no PPA[cite: 25].
                </p>
            </div>
            {/* Gargalo 3: Aposta Arriscada */}
            <div className="p-5 border rounded-lg shadow-sm bg-yellow-50/50 dark:bg-yellow-900/20">
                <h3 className="font-bold text-xl mb-2 text-yellow-700 dark:text-yellow-400">3. Aposta Arriscada (Receita de Capital)</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    [cite_start]A LOA conta com dinheiro de eventos não recorrentes, como a venda de bens públicos (Alienação de Bens), para compor o investimento[cite: 25].
                </p>
                <p className="text-xs italic text-yellow-600 dark:text-yellow-300/80">
                    **Bloqueio:** Se o município não conseguir vender esses bens, a margem de investimento (10%) diminui drasticamente. [cite_start]O PPA fica refém de uma aposta[cite: 25].
                </p>
            </div>
        </div>
      </section>

      {/* COBRANÇA DO CIDADÃO (OPR) */}
      <section className="space-y-6 py-8 border-t border-border">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            [cite_start]O Que o Cidadão Deve Cobrar (Focando no OPR) [cite: 26]
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl">
            [cite_start]O lado positivo é que o PPA usa a linguagem moderna do **Orçamento por Resultado (OPR)**[cite: 27]. [cite_start]Isso permite que você faça cobranças mais inteligentes[cite: 28].
        </p>
        <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-4 mb-4">
            [cite_start]<p>Não pergunte: "Quanto gastou?" [cite: 29]</p>
            [cite_start]<p className="text-2xl mt-1">Pergunte: "Qual foi o **RESULTADO** e o **IMPACTO** desse gasto?" [cite: 30]</p>
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
                        [cite_start]<td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Programas de Limpeza/Serviços Públicos [cite: 31]</td>
                        <td className="px-6 py-4">O PPA mede em *Tonelada/Dia Coletada*. Cobrem: O número está melhorando? [cite_start]O gasto (LOA) está compatível com o **Resultado (PPA)**? [cite: 31]</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                        [cite_start]<td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Programas de Saúde [cite: 31]</td>
                        <td className="px-6 py-4">O PPA deve ter indicadores de *Resultado* (ex: Redução do Tempo de Espera para Consultas de Especialistas). [cite_start]Cobrem: O dinheiro da LOA está reduzindo a fila ou só pagando mais salários? [cite: 31]</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        [cite_start]<td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Programas de Inovação e Gestão [cite: 31]</td>
                        <td className="px-6 py-4">O PPA promete modernização. Cobrem: Qual o plano para **reduzir o custo de custeio** e liberar dinheiro para o investimento? [cite_start]A inovação deve gerar economia, não mais gasto[cite: 31].</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      {/* DESAFIOS E META (ASIDE - MANTIDO) */}
      <aside className="rounded-xl border border-dashed border-border p-6 mt-12 bg-blue-50 dark:bg-blue-900/20">
        [cite_start]<h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Desafios para o Observatório [cite: 32]</h3>
        <p className="text-md text-slate-700 dark:text-slate-300">
          [cite_start]O foco não é só auditar contas, é garantir que Taubaté transforme o **PPA (Vontade)** em **LOA (Resultado)**[cite: 33].
          [cite_start]Nossa Meta: Usar a própria promessa de "Gestão Moderna" do PPA contra as fragilidades fiscais da LOA, exigindo que a Prefeitura demonstre: **Onde está a eficiência que vai transformar 10% de investimento na execução de 100% das promessas?** [cite: 34]
        </p>
      </aside>
    </main>
  );
}
