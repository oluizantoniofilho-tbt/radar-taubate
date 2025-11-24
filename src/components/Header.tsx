
"use client";
import * as React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import clsx from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // 🚀 Adicionado "Manifesto" preservando a ordem lógica
  const navItems = [
    { name: "Início", href: "/" },
    { name: "Manifesto", href: "/manifesto" },
    { name: "Indicadores", href: "/indicadores" },
    { name: "Planejamento (PPA & LOA)", href: "/planejamento" },
    { name: "Câmara Municipal", href: "/camara" },
    { name: "TransfereGov", href: "/transferegov" },
    { name: "Artigos & Análises", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex items-center justify-between max-w-7xl px-6 py-4">
        
        {/* Identidade */}
        <Link href="/" className="flex items-center gap-1 text-2xl md:text-3xl tracking-tight">
          <span className="logo-radar font-bold">Radar</span>
          <span className="logo-taubate font-bold">Taubaté</span>
        </Link>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center justify-center gap-12">
            {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative text-[15px] font-medium px-1 transition-all duration-300 whitespace-nowrap",
                pathname === item.href
          ? "text-[#1E40AF] dark:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#1E40AF] dark:after:bg-cyan-400"
          : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-[1.05]"
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

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-background/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 px-6 pb-4">
          <nav className="flex flex-col space-y-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "text-base font-medium transition-all duration-200",
                  pathname === item.href
                    ? "text-[#1E40AF] dark:text-cyan-400"
                    : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-200 dark:border-white/10">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


