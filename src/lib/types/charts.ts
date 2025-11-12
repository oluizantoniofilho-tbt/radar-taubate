
// Tipos base para datasets e gráficos

export interface ChartPoint {
    label: string;  // Ex.: "Jan", "Fev"
    value: number;  // Ex.: 8500000
  }
  
  export interface ChartDataset {
    id: string;     // Identificador único (ex.: "receitas", "despesas")
    title: string;  // Título exibido no gráfico
    color: string;  // Cor principal do gráfico (hex, hsl ou Tailwind)
    data: ChartPoint[];
  }