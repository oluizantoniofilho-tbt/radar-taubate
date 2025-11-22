"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NoticiaOficial {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image: string | null;
}

export default function NoticiasOficiaisSection() {
  const [noticias, setNoticias] = useState<NoticiaOficial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await fetch("/api/noticias-oficiais");
        if (!res.ok) {
          throw new Error("Erro ao buscar notícias");
        }

        const data = (await res.json()) as {
          items: NoticiaOficial[];
          error?: string;
        };

        if (data.error) {
          throw new Error(data.error);
        }

        setNoticias(data.items.slice(0, 4)); // exibe só as 4 últimas
      } catch (err) {
        console.error(err);
        setError(
          "Não foi possível carregar as notícias da prefeitura agora. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <section className="bg-slate-950/80 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] items-start">
        {/* Coluna de texto / título */}
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-sky-400 uppercase mb-2">
            Editorial Aletheia · Radar Taubaté
          </h2>
          <h3 className="text-3xl md:text-[32px] font-bold text-slate-50 leading-tight">
            Últimas Notícias Oficiais de Taubaté
          </h3>
          <p className="mt-4 text-slate-300 text-base md:text-lg max-w-lg">
            Atualizações diretamente das fontes públicas oficiais. Acompanhe os
            principais movimentos da cidade em tempo quase real.
          </p>
        </div>

        {/* Coluna de cards */}
        <div className="space-y-4">
          {loading && (
            <p className="text-slate-400 text-sm">
              Carregando notícias oficiais...
            </p>
          )}

          {!loading && error && (
            <p className="text-slate-400 text-sm max-w-md">{error}</p>
          )}

          {!loading && !error && noticias.length === 0 && (
            <p className="text-slate-400 text-sm">
              Nenhuma notícia encontrada no momento. Tente novamente mais tarde.
            </p>
          )}

          {!loading &&
            !error &&
            noticias.map((noticia) => (
              <Link
                key={noticia.link}
                href={noticia.link}
                target="_blank"
                className="group flex gap-4 rounded-xl border border-slate-800/80 bg-slate-900/70 hover:bg-slate-900 transition-colors overflow-hidden"
              >
                {/* Thumb (se vier imagem do feed, já encaixa aqui) */}
                <div className="w-24 md:w-28 bg-slate-800/70 flex items-center justify-center text-xs text-slate-400">
                  {noticia.image ? (
                    // se quiser, depois trocamos para <Image /> do Next
                    <span className="px-2 text-center">Imagem</span>
                  ) : (
                    <span className="px-2 text-center">
                      Prefeitura de Taubaté
                    </span>
                  )}
                </div>

                <div className="flex-1 py-3 pr-4">
                  <h4 className="text-sm md:text-base font-semibold text-slate-50 group-hover:text-sky-300 line-clamp-2">
                    {noticia.title}
                  </h4>
                  {noticia.description && (
                   <p className="mt-1 text-xs md:text-sm text-slate-400 line-clamp-2">
                   {noticia.description
                     .replace(/<\/?[^>]+(>|$)/g, "")
                     .trim()}
                 </p>
               )}
               {noticia.pubDate && (
                 <p className="mt-2 text-[11px] text-slate-500">
                   {new Date(noticia.pubDate).toLocaleDateString("pt-BR", {
                     day: "2-digit",
                     month: "short",
                     year: "numeric",
                   })}
                 </p>
               )}
             </div>
           </Link>
         ))}
     </div>
   </div>
 </section>
);
} 