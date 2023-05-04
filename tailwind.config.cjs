/** @type {import('@pinegrow/tailwindcss-plugin')} */
const {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} = require('./themes/pg-tailwindcss/tokens.cjs') // tailwind.config.[js,cjs]

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@pinegrow/tailwindcss-plugin').default({
      colors: pg_colors,
      fonts: pg_fonts,
      backgrounds: pg_backgrounds,
    }),
  ],
  safelist: [
    {
      pattern: /pg-(.+)/, // .+ means one or more chars, .* means zero or more
    },
  ],
  darkMode: 'class',
  get content() {
    const _content = [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx,mdx}',
      //...
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
