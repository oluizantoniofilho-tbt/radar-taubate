
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Relatórios", href: "/relatorios" },
    { name: "Planejamento", href: "/indicadores/ppa-analise" },
    { name: "Configurações", href: "/configuracoes" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 transition-all duration-300">
        {/* Lado esquerdo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            Radar Taubaté
          </Link>
          <p className="text-sm text-muted-foreground hidden sm:block">
            Painel de Inteligência Pública • Transparência e análise inteligente das finanças municipais
          </p>
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-5 mt-3 md:mt-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative text-sm font-semibold transition-all duration-300 px-2 py-1",
                pathname === item.href
                  ? "text-cyan-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:animate-pulse-soft"
                  : "text-gray-300 hover:text-white hover:scale-105"
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>

      <style jsx>{`
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.7; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.1); }
        }
        .after\\:animate-pulse-soft::after {
          animation: pulse-soft 3s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </header>
  );
}