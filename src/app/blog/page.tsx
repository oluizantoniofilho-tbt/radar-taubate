
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";

type Article = {
  title: string;
  summary?: string;
  slug: string;
  date?: string;
};

type ArticleCardProps = {
  article: Article;
  index: number;
};

const ArticleCard = ({ article, index }: ArticleCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    className="bg-card border border-border rounded-lg overflow-hidden flex flex-col"
  >
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
      <p className="text-muted-foreground flex-grow mb-4">
        {article.summary}
      </p>

      <div className="mt-auto">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href={`/blog/${article.slug}`}>
            Ler análise
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </motion.div>
);

export default function BlogPage() {
  const articles: Article[] = [
    // =======================================
    // 📌 SEU PRIMEIRO ARTIGO OFICIAL
    // =======================================
    {
      slug: "raio-x-fiscal-taubate-2015-2025",
      title: "Raio X Fiscal de Taubaté (2015–2025)",
      summary:
        "Uma década de déficits, rigidez orçamentária e deterioração fiscal — entenda a crise estrutural de Taubaté e as projeções para os próximos anos.",
    },

    // =======================================
    // PLACEHOLDERS
    // =======================================
    {
      slug: "desmistificando-orcamento-publico",
      title: "Desmistificando o Orçamento Público",
      summary:
        "Um guia completo para entender como o dinheiro da cidade é arrecadado e para onde ele vai.",
    },
    {
      slug: "analise-ppa-2025",
      title: "Análise do Plano Plurianual (PPA) 2022-2025",
      summary:
        "Metas, programas e resultados do principal instrumento de planejamento municipal.",
    },
    {
      slug: "saude-taubate-raio-x",
      title: "Raio-X da Saúde em Taubaté",
      summary:
        "Como a saúde municipal é financiada, onde o dinheiro é gasto e quais são os desafios reais.",
    },
    {
      slug: "educacao-investimentos-futuro",
      title: "Educação: Investimentos e o Futuro",
      summary:
        "Como Taubaté investe em educação, o impacto nos indicadores e os desafios estruturais.",
    },
    {
      slug: "o-papel-do-vereador",
      title: "Qual o Papel de um Vereador?",
      summary:
        "Funções, responsabilidades e como o Legislativo influencia diretamente a vida da cidade.",
    },
    {
      slug: "lei-de-acesso-a-informacao-pratica",
      title: "A Lei de Acesso à Informação na Prática",
      summary:
        "Como qualquer cidadão pode usar a LAI para solicitar dados à Prefeitura e à Câmara.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-left mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Artigos & Análises
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
              Análises aprofundadas, investigações independentes e conteúdo
              técnico sobre gestão pública.
            </p>
          </motion.div>

          {/* Grade */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

