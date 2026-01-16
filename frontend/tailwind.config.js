/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-red": "#DC2626",
      },
      screens: {
        '2xl': '1536px',   // Default Tailwind 2xl
        '3xl': '1920px',   // Large desktop (30" monitor typically 2560x1440)
        '4xl': '2560px',   // Very large desktop (30" monitor at native resolution)
      },
    },
  },
}

