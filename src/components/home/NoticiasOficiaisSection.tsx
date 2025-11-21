"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface NoticiaOficial {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string | null;
}

const FEED_URL = "https://ecrie20.com.br/taubate.sp.gov.br/feed.xml";

export default function NoticiasOficiaisSection() {
  const [noticias, setNoticias] = useState<NoticiaOficial[]>([]);
  const [loading, setLoading] = useState(true);

  async function carregar() {
    try {
      const res = await fetch(FEED_URL);
      const xmlText = await res.text();

      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, "text/xml");
      const items = Array.from(xml.getElementsByTagName("item"));

      const noticiasFormatadas = items.slice(0, 4).map((item) => {
        const title = item.getElementsByTagName("title")[0]?.textContent || "";
        const link = item.getElementsByTagName("link")[0]?.textContent || "";
        const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || "";
        const description = item.getElementsByTagName("description")[0]?.textContent || "";

        // Thumbnail fallback
        const mediaThumb =
          item.getElementsByTagName("media:thumbnail")[0]?.getAttribute("url") ||
          item.getElementsByTagName("media:content")[0]?.getAttribute("url") ||
          "https://taubate.sp.gov.br/Arquitetura/Imagens/prefeitura/brasao.png";

        return {
          title,
          link,
          pubDate,
          description,
          image: mediaThumb,
        };
      });

      setNoticias(noticiasFormatadas);
    } catch (err) {
      console.error("Erro ao carregar RSS", err);
    }

    setLoading(false);
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <section className="py-16 px-6 bg-[#0a0f1c] text-white border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Últimas Notícias Oficiais de Taubaté</h2>
        <p className="text-slate-300 mb-10 max-w-2xl">
          Atualizações diretamente das fontes públicas oficiais. Acompanhe os movimentos da cidade em tempo quase real.
        </p>

        {loading && <p className="text-slate-400">Carregando notícias...</p>}

        {!loading && noticias.length === 0 && (
          <p className="text-slate-400">Nenhuma notícia encontrada no momento.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {noticias.map((n, i) => (
            <a
              key={i}
              href={n.link}
              target="_blank"
              className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
            >
              <img
                src={n.image || ""}
                alt=""
                className="w-full h-40 object-cover rounded-lg mb-3 opacity-90 group-hover:opacity-100 transition"
              />

              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                {n.title}
              </h3>

              <p className="text-sm text-slate-400 line-clamp-3 mb-3">
                {n.description.replace(/<[^>]+>/g, "")}
              </p>

              <span className="inline-flex items-center text-blue-400 font-medium">
                Ler matéria completa <ArrowRight size={16} className="ml-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}