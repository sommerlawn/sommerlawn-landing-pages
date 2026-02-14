/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        smurf: {
          DEFAULT: '#00AEEF',
          light: '#33c3f5',
          dark: '#0089bd',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          card: '#141414',
          border: '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
};
