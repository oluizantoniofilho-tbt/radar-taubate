import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/Header";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Radar Taubaté — Painel de Inteligência Pública",
  description:
    "Análise inteligente das finanças e dados públicos de Taubaté. Acompanhe receitas, despesas e indicadores com transparência e pedagogia.",
  openGraph: {
    title: "Radar Taubaté",
    description:
      "Painel de Inteligência Pública para as finanças e dados públicos de Taubaté.",
    url: "https://radartaubate.vercel.app",
    siteName: "Radar Taubaté",
    images: [
      {
        url: "/taubate-panorama.jpg",
        width: 1200,
        height: 630,
        alt: "Vista panorâmica de Taubaté",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radar Taubaté",
    description:
      "Painel de Inteligência Pública para as finanças e dados públicos de Taubaté.",
    images: ["/taubate-panorama.jpg"],
  },
  other: {
    "google-site-verification": "google2f92f95777bc39d2.html",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>

          <footer className="w-full border-t border-border py-4 mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} <strong>Aletheia</strong> — Observatório de Governança e Dados Públicos
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
