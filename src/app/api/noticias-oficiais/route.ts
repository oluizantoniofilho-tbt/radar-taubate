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
      // 🔹 1) Extrair imagem corretamente
      const media = item["media:content"]?.[0]?.$?.url ?? null;

      // 🔹 2) Extrair descrição e limpar o HTML
      const descRaw = item.description?.[0] ?? "";
      const descClean = descRaw
        .replace(/<[^>]+>/g, " ") // remove tags
        .replace(/&[a-z]+;/gi, " ") // remove entidades tipo &eacute;
        .replace(/\s+/g, " ") // remove espaços extras
        .trim();

      return {
        title: item.title?.[0] ?? "",
        link: item.link?.[0] ?? "#",
        pubDate: item.pubDate?.[0] ?? "",
        description: descClean,
        image: media,
      };
    });

    return NextResponse.json({ items });
  } catch (e) {
    console.error("Erro no RSS:", e);
    return NextResponse.json({ items: [], error: "Erro interno" });
  }
}