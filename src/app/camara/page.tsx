// src/app/camara/page.tsx
// Server Component - Ótimo para conteúdo estático e SEO.

import Link from "next/link"; // Import adicionado para o CTA
import { CamaraOrcamentoChart } from "@/components/charts/CamaraOrcamentoChart";
import { CamaraDespesasTop10Chart } from "@/components/charts/CamaraDespesasTop10Chart";

export default function CamaraPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">

      {/* CABEÇALHO */}
      <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
        Câmara Municipal — Transparência e Execução Orçamentária
      </h1>

      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mb-12">
        Nesta página você encontra uma visão detalhada sobre o orçamento e 
        a execução financeira da Câmara Municipal de Taubaté no exercício de 2025.
      </p>
      
      {/* SEÇÃO 1: CONTEÚDO TEXTUAL (Sua futura área de texto de Gestão Pública) */}
      <section className="mb-16 border-l-4 border-blue-500 pl-4">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
          Análise Detalhada e Contexto Político-Orçamentário
        </h2>
        {/* PLACEHOLDER para o conteúdo que você irá gerar */}
        <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg">
          <p>
            [PLACEHOLDER 1: Insira aqui o seu primeiro parágrafo sobre a análise de gestão da Câmara. 
            Foque na importância do Legislativo para o controle de gastos e na função fiscalizadora dos vereadores. 
            Mantenha este texto direto para otimizar a leitura.]
          </p>
          <p>
            [PLACEHOLDER 2: Utilize este espaço para detalhar a base legal, como a Lei de Responsabilidade Fiscal (LRF) 
            e as fontes de receita da Câmara. Este é um Server Component, então o texto aqui é excelente para SEO.]
          </p>
        </div>
      </section>

      {/* SEÇÃO 2: GRÁFICOS */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">
            Orçamento Anual da Câmara (Série Histórica)
        </h2>
        <CamaraOrcamentoChart />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">
            Top 10 Despesas por Natureza
        </h2>
        <CamaraDespesasTop10Chart />
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
