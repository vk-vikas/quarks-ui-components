/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border-t|border)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /bg-(black|white)/,
    },
    {
      pattern: /text-(black|white)/,
    },
    { pattern: /bg-./, variants: ["hover"] },
  ],
};
