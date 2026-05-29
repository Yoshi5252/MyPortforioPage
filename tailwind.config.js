/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // アクセントカラーはCSS変数 --accent と連動
      colors: {
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
}
