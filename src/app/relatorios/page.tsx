import React from "react"

export const metadata = {
    title: "Relatórios Públicos | Radar Taubaté",
    description: "Arquivos oficiais e visualizações de receitas e despesas públicas.",
  };
  
  export default function RelatoriosPage() {
    return (
      <section className="p-8 space-y-4">
        <h1 className="text-3xl font-bold text-primary">📊 Relatórios Públicos</h1>
        <p className="text-muted-foreground">
          Acompanhe os relatórios oficiais de receitas, despesas e execução orçamentária do município.
        </p>
      </section>
    );
  }