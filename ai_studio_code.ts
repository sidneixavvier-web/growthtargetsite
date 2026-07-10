import type { Config } from "tailwindcss";

const config: Config {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f35b0c",
          black: "#2c2c2c",
          darker: "#0f0f0f",
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(15, 15, 15, 0.9), rgba(15, 15, 15, 0.4)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};
export default config;