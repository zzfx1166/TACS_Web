// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     'postcss-preset-env': {},
//   }
// }

module.exports = {
  plugins: [
      require('cssnano')({
          preset: 'default',
      }),
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-preset-env'),
  ],
};
module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    cssnano: ctx.env === 'production' ? {} : false,
  },
})