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
      // alguns feeds usam media:content, outros <enclosure>, então deixo flexível
      const mediaContent =
        item["media:content"] ||
        item.media?.content ||
        item.enclosure ||
        null;

      const imageUrl =
        mediaContent?.$.url ||
        mediaContent?.url ||
        null;

      return {
        title: item.title ?? "",
        link: item.link ?? "",
        description: item.description ?? "",
        pubDate: item.pubDate ?? "",
        image: imageUrl,
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