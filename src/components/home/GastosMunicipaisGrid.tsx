'use client';

import  TopGastosMunicipaisChart  from "@/components/charts/TopGastosMunicipaisChart";

export default function GastosMunicipaisGrid() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Top 10 Gastos Municipais
          </h2>

          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Os maiores gastos do município, classificados do 1º ao 10º lugar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TopGastosMunicipaisChart />
        </div>

      </div>
    </section>
  );
}