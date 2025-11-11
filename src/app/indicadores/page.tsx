import React from "react";

export const metadata = {
  title: "Indicadores | Radar Taubaté",
  description: "Painel de indicadores econômicos e financeiros do município.",
};

export default function IndicadoresPage() {
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-primary">📈 Indicadores</h1>
      <p className="text-muted-foreground">
        Explore os principais indicadores financeiros do município — comparativos, tendências e dados atualizados.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-card p-6 shadow-md">
          <h2 className="text-lg font-semibold text-primary">Arrecadação Total</h2>
          <p className="text-2xl font-bold text-foreground mt-2">R$ 50.000.000,00</p>
        </div>
        <div className="rounded-xl bg-card p-6 shadow-md">
          <h2 className="text-lg font-semibold text-primary">Despesa Total</h2>
          <p className="text-2xl font-bold text-foreground mt-2">R$ 45.000.000,00</p>
        </div>
        <div className="rounded-xl bg-card p-6 shadow-md">
          <h2 className="text-lg font-semibold text-primary">Saldo Atual</h2>
          <p className="text-2xl font-bold text-foreground mt-2">R$ 5.000.000,00</p>
        </div>
      </div>
    </section>
  );
}