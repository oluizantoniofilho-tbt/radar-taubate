import { CamaraOrcamentoChart } from "@/components/charts/CamaraOrcamentoChart";
import { CamaraDespesasTop10Chart } from "@/components/charts/CamaraDespesasTop10Chart";

export default function CamaraPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">

      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Câmara Municipal — Transparência e Execução Orçamentária
      </h1>

      <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mb-12">
        Nesta página você encontra uma visão detalhada sobre o orçamento e 
        a execução financeira da Câmara Municipal de Taubaté no exercício de 2025.
      </p>

      <section className="mb-16">
        <CamaraOrcamentoChart />
      </section>

      <section className="mb-16">
        <CamaraDespesasTop10Chart />
      </section>

    </main>
  );
}