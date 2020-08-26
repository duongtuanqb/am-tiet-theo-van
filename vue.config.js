module.exports = {
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Âm tiết theo vần'
      return args
    })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}