# Blueprint: Radar Taubaté

## Overview

Radar Taubaté is an analytical dashboard for municipal finances (with simulated data) that displays revenues, expenses, and budget execution for the city of Taubaté-SP. The application's design has been revamped to be modern, clean, and visually appealing, providing a clear and objective user experience. It now features a dark mode and a more refined user interface.

## Style and Design

-   **Color Palette:**
    -   **Light Mode:**
        -   Background: `#FFFFFF`
        -   Foreground: `#09090B`
        -   Card: `#FFFFFF`
        -   Primary: `#18181B`
        -   Destructive: `#dc2626`
    -   **Dark Mode:**
        -   Background: `#09090B`
        -   Foreground: `#FAFAFA`
        -   Card: `#09090B`
        -   Primary: `#FAFAFA`
        -   Destructive: `#7f1d1d`
-   **Typography:**
    -   Font: Inter (sans-serif)
-   **Visual Components:**
    -   **Header:** A fixed header with the application title and a theme toggle button (light/dark/system).
    -   **Dashboard Cards:** Modern, lifted cards with subtle shadows and hover effects to display key financial totals (Revenues, Expenses, Balance).
    -   **Charts:**
        -   **Time Series Chart:** A line chart to show the monthly evolution of revenues and expenses.
        -   **Top 5 Charts:** Vertical bar charts to display the top 5 revenue sources and top 5 expense functions.
    -   **Layout:** Responsive layout for desktop, tablet, and mobile, with a clean and organized structure.
    -   **Animations:** Subtle fade-in animations for a more dynamic user experience.

## Functionalities

-   **Dashboard:**
    -   Displays the following simulated data:
        -   Total Revenues
        -   Total Expenses
        -   Balance
-   **Charts:**
    -   **Monthly Evolution:** A line chart comparing monthly revenues and expenses.
    -   **Top 5 Revenue Sources:** A vertical bar chart showing the top 5 revenue sources.
    -   **Top 5 Expense Functions:** A vertical bar chart showing the top 5 expense functions.
-   **Theme Toggle:**
    -   Allows users to switch between light, dark, and system themes.

## Current Changes (Refactoring and Visual Enhancement)

-   **Dependency Installation:**
    -   Installed `tailwindcss`, `postcss`, `autoprefixer`, `lucide-react`, `next-themes`, `recharts`, `clsx`, and `tailwind-merge`.
-   **Configuration:**
    -   Configured `tailwind.config.ts` with the new theme and plugins.
    -   Updated `globals.css` with the new theme variables.
-   **Component Refactoring:**
    -   Refactored `ThemeToggle.tsx` to use `lucide-react` icons and a dropdown menu.
    -   Created a new `Header.tsx` component.
    -   Refactored `Dashboard.tsx` with the new design, including updated cards and charts.
    -   Updated `layout.tsx` to include the new `Header` and `ThemeProvider`.
-   **UI Components:**
    -   Created new UI components for `button` and `dropdown-menu`.
-   **Linting:**
    -   Attempted to run `npm run lint -- --fix` and `npm run lint` but encountered errors. Decided to proceed with the visual enhancements as the primary goal.
