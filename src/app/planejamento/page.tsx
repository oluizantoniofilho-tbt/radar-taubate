import React from "react";
import Link from "next/link";
import { PpaLoaContent } from "@/components/PpaLoaContent";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Planejamento Público (PPA & LOA) | Radar Taubaté",
  description:
    "Entenda como Taubaté planeja e executa seu orçamento público via PPA e LOA. Análises, diagnósticos e documentos oficiais.",
};

export default function PlanejamentoPage() {
  return (
    <main className="max-w-7xl mx-auto px-5 md:px-6 pt-24 pb-20 min-h-screen bg-white dark:bg-slate-900">
      
      {/* ----- HEADER ----- */}
      <header className="space-y-6 mb-14">
        <span className="inline-flex items-center text-sm font-semibold text-sky-700 bg-sky-100 dark:bg-sky-900/40 dark:text-sky-300 px-3 py-1 rounded-full">
          <BookOpen className="w-4 h-4 mr-2" /> Análise de Gestão Pública
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
          R$ 2,5 Bilhões para Taubaté.
          <br className="hidden md:block" />
          Construindo o Futuro ou Pagando o Presente?
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl">
          Todos os anos, a Prefeitura define o que deseja realizar (PPA) e quanto
          realmente pode executar (LOA). Juntos, esses documentos revelam as
          prioridades — e os limites — do futuro da cidade.
        </p>
      </header>

      {/* ----- CONTEÚDO PRINCIPAL ----- */}
      <PpaLoaContent />

      {/* ----- DOCUMENTOS OFICIAIS ----- */}
      <section className="space-y-6 py-10 mt-14 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Acesse os Documentos Oficiais
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Consulte os arquivos originais e compare o que foi planejado, autorizado e executado.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-3">
          
          {/* PPA */}
          <Link
            href="/data/PPA 2026-2029.pdf"
            target="_blank"
            className="inline-flex items-center rounded-xl px-5 py-2.5 font-semibold
                       bg-sky-600 text-white shadow-md hover:bg-sky-500 
                       transition-all duration-200"
          >
            Abrir PPA (PDF)
          </Link>

          {/* LOA */}
          <Link
            href="/data/loa.pdf"
            target="_blank"
            className="inline-flex items-center rounded-xl px-5 py-2.5 font-semibold
                       bg-sky-600 text-white shadow-md hover:bg-sky-500
                       transition-all duration-200"
          >
            Abrir LOA (PDF)
          </Link>

          {/* Relatórios */}
          <Link
            href="/indicadores"
            className="inline-flex items-center rounded-xl px-5 py-2.5 font-semibold
                       border border-slate-300 dark:border-slate-700
                       text-slate-700 dark:text-slate-200
                       hover:bg-slate-100 dark:hover:bg-slate-800/70
                       transition-all duration-200"
          >
            Ver Relatórios de Execução
          </Link>
        </div>
      </section>

    </main>
  );
}
