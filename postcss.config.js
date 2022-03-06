module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    // ...(process.env.JEKYLL_ENV === 'production' ? { cssnano: {} } : {})
  ]
};
