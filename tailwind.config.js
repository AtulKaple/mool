/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-shadow': '0px 20px 40px -8px rgba(16, 24, 40, 0.1)',
        'custom-light': '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        'custom-shadow-input': '0px 1px 2px 0px rgba(16, 24, 40, 0.04)',
      },
    },
  },
  plugins: [],
};
