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
        'bw-drum': "url('/img/bg.jpg')",
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
