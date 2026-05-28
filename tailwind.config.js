module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        'kaleidoscope': "url('/img/bg.jpeg')",
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
