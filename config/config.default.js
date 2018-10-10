module.exports = {
  keys: 'sddads',
  port: 3002,
  // cors: {
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',credentials: true,
  // },
  // 关闭csrf
  security: {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 白名单
    domainWhiteList: [ 'http://localhost:9000' ],
  },
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  middleware: [ 'authentication', 'dealRes' ],
  authentication: {
    ignore : /^\/api\/login/,
  },
}
