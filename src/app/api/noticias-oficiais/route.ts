import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

const FEED_URL = "https://ecrie20.com.br/taubate.sp.gov.br/feed.xml";

export async function GET() {
  try {
    const res = await fetch(FEED_URL, {
      // sempre buscar a versão mais nova do feed
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Erro ao buscar RSS:", res.status, res.statusText);
      return NextResponse.json(
        { items: [], error: "Erro ao buscar o feed" },
        { status: 500 }
      );
    }

    const xml = await res.text();

    // Converte XML -> JS
    const parsed = await parseStringPromise(xml, { explicitArray: false });

    const channel = parsed?.rss?.channel;
    const itemsRaw = Array.isArray(channel?.item)
      ? channel.item
      : channel?.item
      ? [channel.item]
      : [];

      const items = itemsRaw.map((item: any) => {
        const media = item["media:content"]?.[0]?.$?.url || null;
      
        return {
          title: item.title?.[0] ?? "",
          link: item.link?.[0] ?? "#",
          pubDate: item.pubDate?.[0] ?? "",
          description: item.description?.[0] ?? "",
          image: media,
        };
      });

    return NextResponse.json({ items });
  } catch (err) {
    console.error("Erro geral ao tratar o RSS:", err);
    return NextResponse.json(
      { items: [], error: "Falha ao processar o feed" },
      { status: 500 }
    );
  }
}