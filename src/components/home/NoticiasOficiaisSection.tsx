
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// 🔥 decoder seguro para HTML entities (resolve acentos quebrados)
function decode(text: string) {
  if (!text) return "";
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

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

        const arrumadas = (data.items ?? []).slice(0, 4).map((n: NoticiaItem) => ({
          ...n,
          title: decode(n.title),
          description: decode(
            n.description
              ?.replace(/<[^>]+>/g, " ")   // remove tags sem quebrar palavras
              ?.replace(/\s+/g, " ")       // normaliza espaços
              ?.trim()
          ),
        }));

        setNoticias(arrumadas);
      } catch (e) {
        console.error("Erro ao carregar notícias:", e);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  function formatarData(dateStr: string) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  // resumo elegante sem quebrar palavras
  function resumo(text: string, max = 130) {
    if (!text) return "";
    if (text.length <= max) return text;

    const cortado = text.slice(0, max);
    const ultimoEspaco = cortado.lastIndexOf(" ");
    return cortado.slice(0, ultimoEspaco) + "…";
  }

  return (
    <section className="relative py-20">

      {/* 🌄 FUNDO PANORÂMICO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/taubate-panorama.jpg"
          alt="Panorama de Taubaté"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/80 to-slate-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Cabeçalho */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase">
            Editorial Aletheia • Radar Taubaté
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Últimas Notícias da Cidade
          </h2>

          <p className="text-slate-300 max-w-xl text-sm md:text-base mt-3">
            Atualizações independentes sobre os acontecimentos mais relevantes de Taubaté,
            com curadoria neutra e apresentação simplificada.
          </p>
        </div>

        {/* Lista */}
        {loading ? (
          <p className="text-slate-400 text-sm">Carregando notícias…</p>
        ) : (
          <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-700/50">
            {noticias.map((n) => (
              <Link
                href={n.link}
                key={n.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  min-w-[240px] max-w-[260px] bg-slate-900/60 
                  border border-slate-800 rounded-2xl 
                  overflow-hidden shadow-xl hover:shadow-sky-500/20
                  hover:border-sky-500/50 transition-all duration-200
                  backdrop-blur-sm

"
              >
                {/* Thumb */}
                <div className="relative h-28 w-full bg-slate-800">
                  {n.image ? (
                    <Image
                      src={n.image}
                      alt={n.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-500 text-xs">
                      Sem imagem
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-4 flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-wide text-sky-400 font-semibold">
                    {formatarData(n.pubDate)}
                  </span>

                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2">
                    {n.title}
                  </h3>

                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {resumo(n.description)}
                  </p>

                  <span className="mt-2 text-xs font-semibold text-sky-400">
                    Ler mais →
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