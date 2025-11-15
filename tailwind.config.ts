import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Tight', 'sans-serif'],
      },
      colors: {
        'primary': '#2563eb', // Azul institucional Aletheia
        'secondary': '#1e3a8a', // Azul escuro de contraste
        'success': '#16a34a',
        'danger': '#dc2626',
        'neutral-gray': '#f9fafb',
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0, 0, 0, 0.08)',
        strong: '0 10px 40px rgba(0, 0, 0, 0.15)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

export default config