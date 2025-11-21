"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface NoticiaOficial {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image?: string | null;
}

const FEED_URL = "https://ecrie20.com.br/taubate.sp.gov.br/feed.xml";

export default function NoticiasOficiaisSection() {
  const [noticias, setNoticias] = useState<NoticiaOficial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarRSS() {
      try {
        const resp = await fetch(FEED_URL);
        const xmlText = await resp.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "application/xml");

        const items = Array.from(xml.querySelectorAll("item")).slice(0, 4);

        const parsed = items.map((item) => {
          const title =
            item.querySelector("title")?.textContent?.trim() ||
            "Sem título";

          const link =
            item.querySelector("link")?.textContent?.trim() || "#";

          const descriptionRaw =
            item.querySelector("description")?.textContent || "";

          // limpa HTML da descrição
          const descriptionClean = descriptionRaw
            .replace(/<[^>]+>/g, "")
            .replace(/\s+/g, " ")
            .trim();

          const description =
            descriptionClean.length > 180
              ? descriptionClean.slice(0, 180) + "..."
              : descriptionClean;

          const pubDateRaw =
            item.querySelector("pubDate")?.textContent || "";

          let pubDate = "";
          if (pubDateRaw) {
            const d = new Date(pubDateRaw);
            if (!isNaN(d.getTime())) {
              pubDate = d.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });
            }
          }

          // tenta achar uma imagem no texto (URL terminando com jpg/png/jpeg)
          const imgMatch = descriptionRaw.match(
            /https?:\/\/\S+\.(jpg|jpeg|png)/i
          );
          const image = imgMatch ? imgMatch[0] : null;

          return {
            title,
            link,
            description,
            pubDate,
            image,
          };
        });

        setNoticias(parsed);
      } catch (error) {
        console.error("Erro ao carregar RSS oficial:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarRSS();
  }, []);

  return (
    <section className="py-14 px-4 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da sessão */}
        <header className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-left">
            Últimas Notícias Oficiais de Taubaté
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Atualizações diretamente das fontes públicas oficiais. Acompanhe
            os movimentos da cidade em tempo quase real.
          </p>
        </header>

        {/* Estado de carregamento */}
        {loading && noticias.length === 0 && (
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Carregando notícias oficiais...
          </p>
        )}

        {/* Lista de notícias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((noticia, idx) => (
            <a
              key={idx}
              href={noticia.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-200/70 dark:border-slate-700/70 overflow-hidden"
              >
              {/* Thumb (se tiver) */}
              {noticia.image && (
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={noticia.image}
                    alt={noticia.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
                  />
                </div>
              )}

              {/* Conteúdo */}
              <div className="flex flex-col flex-1 p-4">
                {noticia.pubDate && (
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                    {noticia.pubDate}
                  </span>
                )}

                <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white line-clamp-2">
                  {noticia.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                  {noticia.description}
                </p>

                <div className="mt-4 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                  Ler matéria completa
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Caso não venha nada do feed */}
        {!loading && noticias.length === 0 && (
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Nenhuma notícia encontrada no momento. Tente novamente mais tarde.
          </p>
        )}
      </div>
    </section>
  );
}