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