
"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import ExecucaoOrcamentariaChart from "@/components/blog-charts/ExecucaoOrcamentariaChart";
import RclEvolucaoChart from "@/components/blog-charts/RclEvolucaoChart";
import DespesaPessoalRCLChart from "@/components/blog-charts/DespesaPessoalRCLChart";
import DeficitPercentualRCLChart from "@/components/blog-charts/DeficitPercentualRCLChart";
import TendenciaFiscalChart from "@/components/blog-charts/TendenciaFiscalChart";

const article = {
  slug: "raio-x-fiscal-taubate-2015-2025",
  title: "Raio X Fiscal de Taubaté (2015–2025)",
  subtitle:
    "Uma década de resultados, déficits e riscos: o que os dados do TCE revelam sobre as finanças do município",
  author: "Radar Taubaté — Plataforma de Inteligência Pública",
  version: "1.0",
  sections: [
    {
      id: "introducao",
      title: "1. Introdução: por que este estudo existe",
      content: [
        "A saúde fiscal de um município não se revela em discursos, mas nos seus números. Para compreender a real situação de Taubaté em 2025 — ano marcado por aumento de IPTU, criação da taxa do lixo, tentativa de adesão ao PEF e crise de caixa — o Radar Taubaté consolidou, pela primeira vez, uma visão integrada e histórica dos principais indicadores do Tribunal de Contas do Estado (TCE-SP):",
        "- Resultado da execução orçamentária (2016–2024);",
        "- Despesa com pessoal do Executivo;",
        "- Receita Corrente Líquida (RCL);",
        "- Evolução das despesas obrigatórias;",
        "- Tendências estruturais.",
        "O que os dados mostram é claro e incontornável:",
        "• Taubaté vive uma crise fiscal estrutural, não conjuntural.",
        "• O problema não é arrecadar pouco — é gastar de forma rígida demais.",
        "• O desequilíbrio vem se acumulando há oito anos.",
        "• 2025 chega como ponto de inflexão.",
        "Este diagnóstico não busca apontar culpados, mas explicar a realidade fiscal de forma transparente, técnica e acessível.",
      ],
    },
    {
      id: "oito-anos-deficit",
      title: "2. O dado central: Taubaté está há 8 anos no vermelho",
      content: [
        "O Resultado da Execução Orçamentária mostra se o município arrecadou mais do que gastou (superávit) ou gastou mais do que arrecadou (déficit).",
        "O que encontramos:",
        "• 2016 → superávit leve;",
        "• 2017 → déficit;",
        "• 2018 → déficit forte;",
        "• 2019 → déficit forte;",
        "• 2020 → déficit;",
        "• 2021 → déficit;",
        "• 2022 → déficit severo;",
        "• 2023 → déficit severo;",
        "• 2024 → déficit elevado.",
        "Resultado: o município fecha no vermelho há 8 anos consecutivos.",
        "Em valores, os déficits mais graves foram:",
        "• 2018: cerca de –R$ 64 milhões;",
        "• 2019: cerca de –R$ 67 milhões;",
        "• 2022: cerca de –R$ 144 milhões;",
        "• 2023: cerca de –R$ 162 milhões;",
        "• 2024: cerca de –R$ 128 milhões.",
        "Isso destrói liquidez, gera restos a pagar, compromete caixa futuro e cria dependência de empréstimos.",
      ],
    },
    {
      id: "causa-estrutural-pessoal",
      title: "3. A causa estrutural: gasto com pessoal cresceu na mesma velocidade que a RCL",
      content: [
        "A despesa com pessoal deveria crescer abaixo da Receita Corrente Líquida.",
        "Mas em Taubaté, entre 2016 e 2024, a despesa com pessoal:",
        "• cresceu mais de 100% em termos nominais;",
        "• consumiu entre 43% e 50% da RCL;",
        "• atingiu 50,63% em 2023 (ponto crítico);",
        "• recuou para 47,20% em 2024, mas ainda em patamar elevado.",
        "Significado técnico:",
        "• A máquina pública ficou pesada, rígida e engessada.",
        "• O município perdeu margem para investir.",
        "• Cada aumento estrutural de despesa empurra o orçamento para o vermelho.",
        "Em outras palavras: a prefeitura passou a gastar quase tudo o que arrecada só para manter a máquina funcionando.",
      ],
    },
    {
      id: "rcl-confirma",
      title: "4. A RCL confirma o diagnóstico: receita cresceu, mas não sobrou espaço",
      content: [
        "A Receita Corrente Líquida de Taubaté cresceu de aproximadamente R$ 808 milhões (2015) para algo em torno de R$ 2,1 bilhões (projeção 2025), com crescimento médio anual na casa de dois dígitos.",
        "Isso é alto para um município de porte médio. Ou seja, o problema não é falta de receita.",
        "O problema é:",
        "• o gasto cresceu junto;",
        "• o gasto obrigatório cresceu acima da média;",
        "• não houve ganho estrutural de eficiência.",
        "O dinheiro entra, mas sai tão rápido quanto.",
      ],
    },
    {
      id: "ponto-ruptura",
      title: "5. O ponto de ruptura: 2022–2024",
      content: [
        "Três anos foram especialmente críticos:",
        "• 2022: déficit de cerca de –9,39% da RCL;",
        "• 2023: déficit de cerca de –8,51% da RCL e pessoal em 50,63% da RCL;",
        "• 2024: déficit de cerca de –5,99% da RCL, com rigidez mantida.",
        "Esse período combina:",
        "- aumento de despesas rígidas;",
        "- aumento de terceirizações;",
        "- inflação contratual;",
        "- recomposições salariais;",
        "- perda de eficiência;",
        "- expansão de contratos contínuos;",
        "- baixa capacidade de investimento.",
        "Aqui o caixa municipal se deteriora rapidamente — e isso se projeta para 2025.",
      ],
    },
    {
      id: "ano-critico-2025",
      title: "6. 2025: o ano em que a conta chegou",
      content: [
        "Os dados apontam que:",
        "• Taubaté não tem caixa suficiente para pagar uma parcela de dívida de pouco mais de R$ 30 milhões em dezembro de 2025;",
        "• o município acelera a atualização da Planta Genérica (aumento de IPTU);",
        "• implementa a taxa do lixo;",
        "• busca adesão ao PEF, programa federal para municípios em crise fiscal;",
        "• amplia cobrança de dívida ativa;",
        "• revisa contratos e considera venda de ativos.",
        "Este é o comportamento típico de municípios em ajuste fiscal forçado.",
        "É o estágio em que:",
        "• a arrecadação não cobre mais a despesa obrigatória;",
        "• o déficit estrutural se instalou;",
        "• a dívida começa a virar problema de caixa;",
        "• a gestão passa a operar no limite.",
        "Taubaté chegou a esse ponto em 2025.",
      ],
    },
    {
      id: "projecao",
      title: "7. Projeção: quando a cidade volta a respirar?",
      content: [
        "Com base nos dados da RCL, despesa com pessoal e trajetória de déficits, o cenário mais provável é:",
        "• 2025: ajuste emergencial, possível adesão ao PEF, corte de despesas, novos mecanismos de aumento de receita;",
        "• 2026: primeiro sinal de desaceleração do déficit; receita melhora com IPTU atualizado, mas despesas ainda pressionadas;",
        "• 2027–2028: cidade volta a ganhar espaço fiscal, possibilidade de superávit primário moderado e início de recuperação da capacidade de investimento;",
        "• 2029: consolidação da normalidade fiscal e retomada mais robusta de investimentos.",
        "Horizonte realista de recuperação: algo entre 4 e 5 anos, dependendo da intensidade e da qualidade das medidas de ajuste.",
      ],
    },
    {
      id: "conclusao",
      title: "8. Conclusão: Taubaté vive uma crise estrutural, mas reversível",
      content: [
        "Os dados da última década mostram um ciclo claro:",
        "- Receita crescente;",
        "- Despesa rígida e em expansão;",
        "- Déficits sucessivos;",
        "- Perda de capacidade de investimento;",
        "- Pressão sobre o caixa;",
        "- Deterioração do equilíbrio fiscal;",
        "- Adoção de medidas emergenciais em 2025.",
        "Mas também mostram que Taubaté tem força econômica para se recuperar:",
        "• a base de receita é robusta;",
        "• o município pode reencontrar o equilíbrio se fizer ajustes sérios e inteligentes;",
        "• o tempo é o fator crítico — não existe solução mágica.",
        "A questão central não é apenas arrecadar mais, mas gastar melhor, com mais foco em eficiência, priorização e sustentabilidade fiscal.",
      ],
    },
    {
      id: "papel-radar",
      title: "9. O papel do Radar Taubaté",
      content: [
        "O objetivo deste estudo não é alarmar, mas informar.",
        "A população tem direito de saber como sua cidade funciona e como decisões fiscais afetam:",
        "- serviços públicos;",
        "- impostos;",
        "- investimentos;",
        "- infraestrutura;",
        "- qualidade de vida;",
        "- o futuro do município.",
        "O Radar Taubaté existe para:",
        "• traduzir dados complexos;",
        "• organizar informações dispersas;",
        "• produzir análises independentes;",
        "• fortalecer a cultura cívica baseada em evidências;",
        "• ajudar cidadãos, gestores e vereadores a tomarem decisões melhores.",
        "Transparência não é fim — é meio para construir uma Taubaté mais inteligente, eficiente e justa.",
      ],
    },
  ],
} as const;

// Mapeia qual gráfico entra em qual seção
const chartsBySectionId: Record<string, React.ReactNode> = {
  "oito-anos-deficit": (
    <div className="mt-6 mb-10">
      <ExecucaoOrcamentariaChart />
    </div>
  ),
  "causa-estrutural-pessoal": (
    <div className="mt-6 mb-10">
      <DespesaPessoalRCLChart />
    </div>
  ),
  "rcl-confirma": (
    <div className="mt-6 mb-10">
      <RclEvolucaoChart />
    </div>
  ),
  "ponto-ruptura": (
    <div className="mt-6 mb-10">
      <DeficitPercentualRCLChart />
    </div>
  ),
  projecao: (
    <div className="mt-6 mb-10">
      <TendenciaFiscalChart />
    </div>
  ),
};

export default function RaioXFiscalPage() {
  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen">
      <main className="pt-28 pb-20 px-4">
        <article className="max-w-5xl mx-auto">
          {/* VOLTAR */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-slate-300 hover:text-sky-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Artigos & Análises
            </Link>
          </div>

          {/* HERO DRAMÁTICO */}
          <header className="mb-12 rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-8 md:px-10 md:py-10 shadow-xl">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-sky-400 mb-3">
              Estudo Especial • Finanças Públicas
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              {article.title}
            </h1>

            <p className="text-base md:text-lg text-slate-200 mb-4 max-w-3xl">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-400">
              <span>{article.author}</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Versão {article.version}</span>
            </div>
          </header>

          {/* CONTEÚDO */}
          <div className="space-y-12">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
                  {section.title}
                </h2>

                {/* Se houver gráfico configurado para esta seção, ele aparece logo após o título */}
                {chartsBySectionId[section.id]}

                <div className="space-y-3 text-sm md:text-base leading-relaxed text-slate-200">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* RODAPÉ DO ARTIGO */}
          <footer className="mt-16 pt-8 border-t border-slate-800 text-xs md:text-sm text-slate-400">
            <p>
              Este estudo foi elaborado com base em dados oficiais do Tribunal de
              Contas do Estado de São Paulo (TCE-SP) e documentos fiscais
              públicos, consolidados e interpretados pelo Radar Taubaté.
            </p>
            <p className="mt-2">
              O objetivo é fortalecer a cultura de transparência, análise técnica
              e participação informada na vida pública de Taubaté.
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}

