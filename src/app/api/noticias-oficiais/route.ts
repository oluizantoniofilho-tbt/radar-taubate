import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

const FEED_URL = "https://ecrie20.com.br/taubate.sp.gov.br/feed.xml";

export async function GET() {
  try {
    const res = await fetch(FEED_URL, { cache: "no-store" });
    if (!res.ok) {
      console.error("Erro ao buscar RSS:", res.status);
      return NextResponse.json({ items: [], error: "Erro ao buscar o feed" });
    }

    const xml = await res.text();
    const parsed = await parseStringPromise(xml, { trim: true });

    const itemsRaw = parsed?.rss?.channel?.[0]?.item ?? [];

    const items = itemsRaw.slice(0, 4).map((item: any) => {

      // 🧠 Função para extrair imagem de forma inteligente
      function extrairImagem(item: any): string | null {
        try {
          // 1) media:content
          const media = item["media:content"];
          if (media?.[0]?.$?.url) return media[0].$.url;
      
          // 2) media:thumbnail
          const thumb = item["media:thumbnail"];
          if (thumb?.[0]?.$?.url) return thumb[0].$.url;
      
          // 3) <image><url>...</url></image>
          if (item.image?.[0]?.url?.[0]) return item.image[0].url[0];
      
          // 4) <img src="..."> dentro da descrição
          const desc = item.description?.[0] ?? "";
          const imgMatch = desc.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatch?.[1]) return imgMatch[1];
      
          return null;
        } catch (e) {
          return null;
        }
      }