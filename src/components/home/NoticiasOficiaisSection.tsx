'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface NoticiaItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image?: string | null;
}

export default function NoticiasOficiaisSection() {
  const [noticias, setNoticias] = useState<NoticiaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch("/api/noticias-oficiais");
        const data = await res.json();
        setNoticias(data.items ?? []);
      } catch (e) {
        console.error("Erro ao carregar notícias:", e);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  function formatDate(dateStr: string) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <section className="py-16 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">
          Editorial Aletheia • Radar Taubaté
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mt-2">
          Últimas Notícias Oficiais de Taubaté
        </h2>
        <p className="text-slate-300 max-w-2xl text-sm md:text-base mt-2 mb-10">
          Atualizações diretamente das fontes públicas oficiais. Acompanhe os principais
          movimentos da cidade em tempo quase real.
        </p>

        {/* Grid original de 4 cards — SEM imagem */}
        {!loading && noticias.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {noticias.slice(0, 4).map((noticia) => (
              <Link
                key={noticia.link}
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 rounded-2xl shadow-md hover:shadow-lg hover:border-sky-500/70 transition-all duration-200 p-4 flex flex-col"
              >
                <span className="text-[11px] uppercase tracking-wide text-sky-400 font-semibold">
                  Prefeitura de Taubaté • {formatDate(noticia.pubDate)}
                </span>

                <h3 className="text-sm font-semibold text-slate-50 leading-snug line-clamp-2 mt-1">
                  {noticia.title}
                </h3>

                <p className="text-[12px] text-slate-300 leading-relaxed mt-2 line-clamp-3">
                  {noticia.description}
                </p>

                <span className="mt-auto text-xs font-semibold text-sky-400 pt-3">
                  Ler matéria completa →
                </span>
              </Link>
            ))}
          </div>
        )}

        {loading && (
          <p className="text-slate-400 text-sm">Carregando notícias oficiais…</p>
        )}
      </div>
    </section>
  );
}