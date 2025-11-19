# Blueprint - Radar Taubaté

## Visão Geral

O Radar Taubaté é um painel de inteligência pública que oferece uma análise detalhada e transparente das finanças e dados públicos do município de Taubaté. A aplicação foi desenvolvida para ser uma ferramenta poderosa para cidadãos, jornalistas, pesquisadores e gestores públicos que desejam acompanhar de perto a aplicação dos recursos públicos.

## Design e Estilo

O design do Radar Taubaté segue uma abordagem moderna e limpa, com foco na usabilidade e na clareza das informações. A paleta de cores é vibrante e energética, e a tipografia foi cuidadosamente escolhida para garantir a legibilidade e a hierarquia visual. A aplicação é totalmente responsiva, adaptando-se a diferentes tamanhos de tela para oferecer a melhor experiência em qualquer dispositivo.

## Inventário do Projeto

### `src/app/`

*   `config.ts`
*   `favicon.ico`
*   `globals.css`
*   `layout.tsx`
*   `page.tsx` - **Contém 'use client'**: Sim
*   `blog/page.tsx` - **Contém 'use client'**: Não
*   `camara/page.tsx` - **Contém 'use client'**: Não
*   `configuracoes/page.tsx` - **Contém 'use client'**: Não
*   `indicadores/page.tsx` - **Contém 'use client'**: Não
*   `planejamento/page.tsx` - **Contém 'use client'**: Não
*   `relatorios/page.tsx` - **Contém 'use client'**: Não
*   `transferegov/page.tsx` - **Contém 'use client'**: Não
*   `indicadores/ppa-analise/page.tsx` - **Contém 'use client'**: Não

### `src/components/`

*   `CardKPI.tsx`
*   `DashboardCards.tsx`
*   `Header.tsx`
*   `MiniCharts.tsx`
*   `ThemeToggle.tsx`
*   `theme-provider.tsx`
*   **`charts/`**
    *   `CamaraDespesasTop10Chart.tsx`
    *   `CamaraOrcamentoChart.tsx`
    *   `DespesasPorSecretariaTop10.tsx`
    *   `ExecucaoTermometros.tsx`
    *   `OrcadoExecutadoAreas.tsx`
*   **`home/`**
    *   `CamaraHeroCTA.tsx`
    *   `CamaraSection.tsx`
    *   `FiscalOverview.tsx`
    *   `Hero.tsx`
    *   `HeroBackground.tsx`
    *   `InsightsDrawer.tsx`
    *   `MacroDashboard.tsx`
    *   `ManifestoSection.tsx`
    *   `SecretariasGrid.tsx`
    *   `TopFornecedoresChart.tsx`
*   **`ui/`**
    *   `button.tsx`
    *   `card.tsx`
    *   `dropdown-menu.tsx`

### `src/hooks/`

*   *A pasta não existe.*

### `src/services/`

*   *A pasta não existe.*

### `src/utils/`

*   *A pasta não existe.*

## Próximos Passos

- **Implementação do Layout da Página Principal:** Criação da estrutura da página principal, incluindo o cabeçalho, o menu de navegação e o rodapé.
- **Desenvolvimento dos Componentes de Análise de Receitas:** Criação dos gráficos e tabelas para a análise das receitas municipais.
- **Desenvolvimento dos Componentes de Análise de Despesas:** Criação dos gráficos e tabelas para a análise das despesas municipais.
- **Desenvolvimento dos Componentes de Indicadores de Desempenho:** Criação dos componentes para a exibição dos indicadores de educação, saúde e saneamento.
