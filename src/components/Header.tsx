
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import clsx from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Relatórios", href: "/relatorios" },
    { name: "Planejamento", href: "/indicadores/ppa-analise" },
    { name: "Configurações", href: "/configuracoes" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex items-center justify-between max-w-7xl px-6 py-4">
        {/* Identidade */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-white">Radar </span>
            <span className="text-cyan-400">Taubaté</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-tight">
            Transparência dos dados públicos
          </p>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative text-base font-medium transition-all duration-300",
                pathname === item.href
                  ? "text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-cyan-400"
                  : "text-gray-300 hover:text-white hover:scale-105"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Tema Desktop */}
        <div className="hidden md:flex items-center justify-end w-24">
          <ThemeToggle />
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-white/10 px-6 pb-4">
          <nav className="flex flex-col space-y-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "text-base font-medium transition-all duration-200",
                  pathname === item.href
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
