"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Relatórios", href: "/relatorios" },
    { name: "Planejamento", href: "/indicadores/ppa-analise" },
    { name: "Configurações", href: "/configuracoes" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Lado esquerdo: título */}
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            Radar Taubaté
          </Link>
          <p className="text-sm text-muted-foreground hidden sm:block">
            Painel Financeiro Municipal
          </p>
        </div>
  
        {/* Lado direito: menu e toggle */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}