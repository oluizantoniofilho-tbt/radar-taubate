import React from "react";

export const metadata = {
    title: "Configurações | Radar Taubaté",
    description: "Ajustes e preferências do painel municipal.",
  };
  
  export default function ConfiguracoesPage() {
    return (
      <section className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-primary">⚙️ Configurações</h1>
  
        <div className="space-y-4 text-muted-foreground">
          <p>
            Aqui você poderá personalizar aspectos do Radar Taubaté, como tema,
            layout, idioma e preferências de exibição de dados.
          </p>
          <p>
            Em breve, esta área permitirá integrar fontes externas de dados (IBGE,
            Siconfi, CNM) e ajustar parâmetros de análise automática.
          </p>
        </div>
      </section>
    );
  }