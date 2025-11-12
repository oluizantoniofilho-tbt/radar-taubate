
// Tipos usados no dashboard de resumo fiscal

export interface FinancialSummary {
    title: string;
    value: number;          // Valor em número (R$, milhões, etc.)
    variation?: number;     // Percentual de variação
    icon?: React.ReactNode; // Ícone opcional
    color?: string;         // Gradiente Tailwind (ex.: "from-green-500/70 to-green-700/90")
  }
  
  export interface ExpenseByFunction {
    function: string; // Ex.: "Saúde"
    amount: number;
  }
  
  export interface RevenueSource {
    source: string; // Ex.: "ICMS", "FPM"
    amount: number;
  }