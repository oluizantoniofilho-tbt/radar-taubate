'use client';

import Image from "next/image";
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch("/api/noticias-oficiais");
        const data = await res.json();

        setNoticias(data.items ?? []);
      } catch (e) {
        console.error("Erro ao carregar notícias:", e);
        setError("Não foi possível carregar as notícias agora. Tente novamente mais tarde.");
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

  function resumirTexto(text: string, max = 220) {
    if (!text) return "";
    const clean = text.replace(/\s+/g, " ").trim();
    if (clean.length <= max) return clean;
    return clean.slice(0, max).trimEnd() + "…";
  }

  return (
    <section className="py-16 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">
            Editorial Aletheia • Radar Taubaté
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Últimas Notícias Oficiais de Taubaté
          </h2>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base">
            Atualizações diretamente das fontes públicas oficiais. Acompanhe os principais
            movimentos da cidade em tempo quase real.
          </p>
        </div>

        {/* Estados de carregamento / erro */}
        {loading && (
          <p className="text-slate-400 text-sm">
            Carregando notícias oficiais…
          </p>
        )}

        {!loading && error && (
          <p className="text-slate-400 text-sm">
            {error}
          </p>
        )}

        {!loading && !error && noticias.length === 0 && (
          <p className="text-slate-400 text-sm">
            Nenhuma notícia encontrada no momento. Tente novamente mais tarde.
          </p>
        )}

        {/* Lista de notícias */}
        {!loading && !error && noticias.length > 0 && (
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700/70 scrollbar-track-slate-900/40">
            {noticias.map((noticia) => (
              <Link
                key={noticia.link}
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[260px] max-w-xs bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:border-sky-500/70 transition-all duration-200 flex flex-col"
              >
                {/* Thumb */}
                {noticia.image && (
                  <div className="relative h-32 w-full">
                    <Image
                      src={noticia.image}
                      alt={noticia.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Conteúdo */}
                <div className="p-4 flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-wide text-sky-400 font-semibold">
                    Prefeitura de Taubaté • {formatDate(noticia.pubDate)}
                  </span>

                  <h3 className="text-sm font-semibold text-slate-50 leading-snug">
                    {noticia.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {resumirTexto(noticia.description)}
                  </p>

                  <span className="mt-2 text-xs font-semibold text-sky-400">
                    Ler matéria completa →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}