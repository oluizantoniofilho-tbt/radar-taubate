// src/app/camara/page.tsx
// Server Component - Ótimo para conteúdo estático e SEO.

/*
 * PROMPT DE SEGURANÇA (SYSTEM INSTRUCTION) PARA CHAMADAS DA IA GEMINI (USO FUTURO):
 *
 * Utilize esta instrução para garantir que o modelo de linguagem (IA) aja com neutralidade e foco técnico,
 * caso decida gerar o conteúdo dos placeholders desta página ou de outras:
 *
 * Aja como um analista de controle social e gestão pública com foco estrito na transparência
 * fiscal e legislação brasileira (como LRF, PPA, LOA).
 *
 * Sua missão é:
 * 1. Análise Factual: Analisar tecnicamente os documentos e dados fornecidos.
 * 2. Geração de Conteúdo: Gerar resumos, artigos ou análises baseadas estritamente nos dados,
 * transformando informações técnicas em conteúdo claro para o cidadão.
 *
 * Regras de Segurança e Foco (Restrições):
 * - Neutralidade Obrigatória: Evite qualquer juízo de valor político, partidário ou especulativo.
 * O tom deve ser estritamente técnico, imparcial e factual.
 * - Escopo Fechado: Não ofereça conselhos de investimento, sugestões de política pública, ou
 * opiniões. Mantenha o foco no dado e no documento.
 * - Proibido Inventar: Não crie ou infira informações que não possam ser diretamente verificadas.
 * - Linguagem: Use Português do Brasil, mantendo um tom informativo e de alta credibilidade.
 */

import React from 'react'; // CORREÇÃO: Import explícito do React para evitar o erro UMD global
import Link from "next/link";
import { CamaraOrcamentoChart } from "../../components/charts/CamaraOrcamentoChart";
import { CamaraDespesasTop10Chart } from "../../components/charts/CamaraDespesasTop10Chart";

export default function CamaraPage() {
  return (
    // Max-w-7xl para dar mais respiro na tela e px-6 para padding em mobile
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* CABEÇALHO */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
        Câmara Municipal — Transparência e Execução Orçamentária
      </h1>

      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mb-12">
        Nesta página você encontra uma visão detalhada sobre o orçamento e
        a execução financeira da Câmara Municipal de Taubaté no exercício de 2025.
      </p>
      
      {/* SEÇÃO 1: CONTEÚDO TEXTUAL */}
      <section className="mb-16 border-l-4 border-blue-500 pl-4">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
          Análise Detalhada e Contexto Político-Orçamentário
        </h2>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg">
          <p>
            O Poder Legislativo municipal, exercido pela Câmara de Vereadores, desempenha um papel crucial no equilíbrio das contas públicas. Além de sua função primária de legislar, a Câmara tem o dever de fiscalizar as ações do Poder Executivo, garantindo que o orçamento aprovado seja executado com transparência e eficiência. Os vereadores são os representantes diretos dos cidadãos nessa fiscalização, sendo responsáveis por aprovar, rejeitar ou emendar as leis orçamentárias, bem como por analisar as contas do prefeito, assegurando o uso correto do dinheiro público.
          </p>
          <p>
            A gestão financeira da Câmara Municipal é estritamente regulada pela Constituição Federal e pela Lei de Responsabilidade Fiscal (LRF - Lei Complementar nº 101/2000). A LRF impõe limites claros para os gastos do Legislativo, incluindo despesas com pessoal, que não podem exceder um percentual da Receita Corrente Líquida do município. As receitas da Câmara são provenientes de repasses do Poder Executivo, conhecidos como duodécimo, que correspondem a uma parcela da arrecadação municipal e devem ser liberados mensalmente para custear suas atividades.
          </p>
        </div>
      </section>

      {/* SEÇÃO 2: GRÁFICOS - CORRIGIDO PARA RESPONSIVIDADE */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">
            Orçamento Anual da Câmara (Série Histórica)
        </h2>
        
        <div className="rounded-xl border border-border p-4 shadow-lg bg-white dark:bg-gray-800">
            <div className="w-full overflow-x-auto">
                <CamaraOrcamentoChart />
            </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">
            Top 10 Despesas por Natureza
        </h2>
        
        <div className="rounded-xl border border-border p-4 shadow-lg bg-white dark:bg-gray-800">
            <div className="w-full overflow-x-auto">
                <div className="min-w-[550px] sm:min-w-0"> 
                    <CamaraDespesasTop10Chart />
                </div>
            </div>
        </div>
      </section>

      {/* SEÇÃO 3: CTA INTERNO - Navegação para Próxima Análise */}
      <section className="mt-20 text-center bg-blue-50 dark:bg-slate-800 p-10 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
            Compare o Legislativo com o Executivo
        </h3>
        <p className="text-md text-slate-600 dark:text-slate-300 mb-6">
            Quer entender como a Câmara se encaixa no panorama geral do planejamento municipal?
        </p>
        
        <Link href="/planejamento" passHref>
          <span className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            Ver Planejamento (PPA & LOA)
          </span>
        </Link>
      </section>
    </main>
  );
}
