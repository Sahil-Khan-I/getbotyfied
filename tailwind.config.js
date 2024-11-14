/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",       // Correct path for app directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Correct path for components
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",      // If you're using pages in src
  ],
  daisyui: {
    themes: ["light", "dark", "cmyk"],
  },
  plugins: [
    require('daisyui'),
  ],
};
