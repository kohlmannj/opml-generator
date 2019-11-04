module.exports = api => ({
  presets: ['@babel/preset-typescript'],
  plugins: [api.env('test') && '@babel/plugin-transform-modules-commonjs'].filter(Boolean),
})
