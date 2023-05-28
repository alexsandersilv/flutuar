/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          white: "#FFFFF",
          green: "#005F15",
          lightGreen: "#00A651",
          gray: "#666666",
        }
      }
    },
  },
  plugins: [],
}
