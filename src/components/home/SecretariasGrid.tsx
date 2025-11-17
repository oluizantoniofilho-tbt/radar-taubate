'use client';

import { DespesasPorSecretariaTop10 } from "@/components/charts/DespesasPorSecretariaTop10";

export default function SecretariasGrid() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Despesas por Secretaria</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Visualize a distribuição dos gastos nas principais áreas da administração.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <DespesasPorSecretariaTop10 />
        </div>
      </div>
    </section>
  );
}
