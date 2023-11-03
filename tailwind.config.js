/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#fe0000',
        'pure-white': '#ffffff',
        'slate-color': '#f1f5f9',
        'dark-slate': '#e2e8f0',
        'lighter-gray':'#e5e7eb',
        'light-gray':'#374151',
        'lighter-blue': '#60a5fa',
        'light-blue':'#3b82f6',
        'medium-blue':'#2563eb',
        'dark-blue':'#1d4ed8',
        'dark-gray':'#111827',
        'neutral-black': '#0a0a0a',
      },
      fontFamily: {
        sans: [
          '"Inter var", sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
    },
  },
  plugins: [],
}