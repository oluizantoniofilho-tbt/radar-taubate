
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";

type Article = {
  title: string;
  summary?: string;
  description?: string;
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
      <p className="text-muted-foreground flex-grow mb-4">{article.summary}</p>
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


const BlogPage = () => {
  const placeholderArticles = [
    {
      slug: "desmistificando-orcamento-publico",
      title: "Desmistificando o Orçamento Público",
      summary: "Um guia completo para entender como o dinheiro da cidade é arrecadado e para onde ele vai, desde os impostos até os investimentos em serviços.",
    },
    {
      slug: "analise-ppa-2025",
      title: "Análise do Plano Plurianual (PPA) 2022-2025",
      summary: "Investigamos as metas, os programas e os resultados esperados do principal instrumento de planejamento de médio prazo do município.",
    },
    {
      slug: "saude-taubate-raio-x",
      title: "Raio-X da Saúde em Taubaté",
      summary: "Como os recursos da saúde são distribuídos? Quais os principais indicadores e desafios da rede municipal? Confira nossa análise detalhada.",
    },
     {
      slug: "educacao-investimentos-futuro",
      title: "Educação: Investimentos e o Futuro",
      summary: "Análise sobre os investimentos na rede de ensino de Taubaté, o impacto no IDEB e as prioridades para os próximos anos.",
    },
    {
      slug: "o-papel-do-vereador",
      title: "Qual o Papel de um Vereador?",
      summary: "Entenda as funções, responsabilidades e o poder de fiscalização dos vereadores na Câmara Municipal e como isso afeta a sua vida.",
    },
    {
      slug: "lei-de-acesso-a-informacao-pratica",
      title: "A Lei de Acesso à Informação na Prática",
      summary: "Um tutorial passo a passo sobre como você, cidadão, pode usar a LAI para solicitar dados e documentos à Prefeitura e à Câmara.",
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-tight">
              Artigos & Análises
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
              Análises, guias e conteúdos educativos sobre gestão pública e dados
              municipais.
            </p>
          </motion.div>

          {/* Grade de Artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
