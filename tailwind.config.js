module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
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
