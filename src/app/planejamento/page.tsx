// src/app/planejamento/page.tsx
// Esta página agora é apenas a casca do layout, importando o conteúdo de src/components/

import React from "react";
import Link from "next/link";
// IMPORTAÇÃO CORRIGIDA para o novo caminho src/components/PpaLoaContent
import { PpaLoaContent } from "@/components/PpaLoaContent"; 
import { BookOpen } from 'lucide-react'; // Adicionado para o ícone de cabeçalho

export const metadata = {
  title: "Planejamento Público (PPA & LOA) | Radar Taubaté",
  description:
    "Entenda o ciclo orçamentário do município: PPA e LOA, com acesso aos documentos oficiais.",
};

export default function PlanejamentoPage() {
  return (
    // Manutenção do fix pt-24 para o Navbar
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-16 min-h-screen bg-white dark:bg-gray-900">
      
      {/* CABEÇALHO E INTRODUÇÃO */}
      <header className="space-y-4 mb-12">
        <span className="inline-flex items-center text-sm font-semibold text-blue-600 bg-blue-100 rounded-full px-3 py-1 dark:bg-blue-900 dark:text-blue-300">
            <BookOpen className="w-4 h-4 mr-2" /> Análise de Gestão Pública
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
          R$ 2,5 Bilhões para Taubaté. Construindo o Futuro ou Pagando o Presente?
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-5xl">
          Todos os anos, a Prefeitura decide o que fará (PPA) e quanto vai custar (LOA). Esses são os dois documentos mais importantes da cidade.
        </p>
      </header>

      {/* NOVO MÓDULO DE CONTEÚDO COMPLEXO */}
      <PpaLoaContent />
      
      {/* SEÇÃO DE LINKS DE DOCUMENTOS */}
      <section className="space-y-4 py-8 mt-8 border-t border-border">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Acesse os Documentos Oficiais</h2>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Baixe as leis e compare o planejado com o executado:
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Link PPA */}
          <Link
            href="/data/PPA 2026-2029.pdf"
            target="_blank"
            className="inline-flex items-center rounded-lg border border-primary bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:bg-primary/90 transition"
          >
            Abrir PPA (PDF)
          </Link>
          
          {/* Link LOA */}
          <Link
            href="/data/loa.pdf"
            target="_blank"
            className="inline-flex items-center rounded-lg border border-primary bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:bg-primary/90 transition"
          >
            Abrir LOA (PDF)
          </Link>

          <Link
            href="/indicadores"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-slate-700 dark:text-slate-200 hover:bg-muted transition"
          >
            Ver Relatórios de Execução
          </Link>
        </div>
      </section>
    </main>
  );
}