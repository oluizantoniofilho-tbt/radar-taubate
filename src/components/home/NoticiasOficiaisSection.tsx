'use client';

import { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NoticiaOficial {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image: string | null;
}

// se este não abrir no navegador, troque para "/feed.xml"
const FEED_URL = "https://taubate.sp.gov.br/feed/";

function stripHtml(html: string) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
}

function formatDate(pubDate: string) {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function NoticiasOficiaisSection() {
  const [noticias, setNoticias] = useState<NoticiaOficial[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarFeed() {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const xml = await res.text();
        const parser = new XMLParser({ ignoreAttributes: false });
        const json = parser.parse(xml);

        const items = json?.rss?.channel?.item;
        const itemsArray = Array.isArray(items) ? items : items ? [items] : [];

        const parsed: NoticiaOficial[] = itemsArray.slice(0, 4).map((item: any) => ({
          title: item.title ?? "",
          link: item.link ?? "#",
          description: stripHtml(item.description ?? ""),
          pubDate: item.pubDate ?? "",
          image:
            item["media:content"]?.["@_url"] ||
            item["media:thumbnail"]?.["@_url"] ||
            null,
        }));

        setNoticias(parsed);
      } catch (e) {
        console.error("Erro ao carregar RSS da prefeitura:", e);
        setErro(true);
      } finally {
        setLoading(false);
      }
    }

    carregarFeed();
  }, []);

  return (
    <section className="bg-slate-950/80 border-y border-slate-800 py-14 px-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start">
        {/* Bloco de texto à esquerda */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Últimas Notícias Oficiais de Taubaté
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300">
            Atualizações diretamente das fontes públicas oficiais. Acompanhe os
            movimentos da cidade em tempo quase real.
          </p>
        </div>

        {/* Cards de notícia à direita */}
        <div className="lg:w-2/3">
          {loading ? (
            <p className="text-slate-400 text-sm">Carregando notícias oficiais...</p>
          ) : erro ? (
            <p className="text-slate-400 text-sm">
              Não foi possível carregar as notícias da prefeitura agora. Tente novamente mais tarde.
            </p>
          ) : noticias.length === 0 ? (
            <p className="text-slate-400 text-sm">
              Nenhuma notícia encontrada no momento. Tente novamente mais tarde.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {noticias.map((noticia) => (
                <article
                  key={noticia.link}
                  className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-500/70 hover:shadow-lg"
                >
                  {noticia.image && (
                    <div className="mb-3 h-32 w-full overflow-hidden rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={noticia.image}
                        alt={noticia.title}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    </div>
                  )}

                  <h3 className="text-sm md:text-base font-semibold text-white line-clamp-3">
                    {noticia.title}
                  </h3>

                  {noticia.pubDate && (
                    <span className="mt-2 text-[11px] uppercase tracking-wide text-slate-400">
                      {formatDate(noticia.pubDate)}
                    </span>
                  )}

                  <p className="mt-2 text-xs md:text-sm text-slate-300 line-clamp-3">
                    {noticia.description}
                  </p>

                  <div className="mt-3 flex justify-end">
                    <Link
                      href={noticia.link}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
                    >
                      Ler no site oficial
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}          