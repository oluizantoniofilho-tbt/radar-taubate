'use client';

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} passHref>
    <span className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
      {children}
    </span>
  </Link>
);

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1E40AF] to-[#0F172A] text-white shadow-lg shadow-blue-900/30">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Radar Taubaté</h1>
          <p className="text-xs text-slate-300">Painel Financeiro Municipal</p>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Dashboard</NavLink>
          <NavLink href="/relatorios">Relatórios</NavLink>
          <NavLink href="/indicadores">Indicadores</NavLink>
          <NavLink href="/configuracoes">Configurações</NavLink>
        </nav>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
