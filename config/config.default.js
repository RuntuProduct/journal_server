// an accept detect function that mark all request with `x-requested-with=XMLHttpRequest` header accepts json.
function accepts(ctx) {
  if (ctx.get('x-requested-with') === 'XMLHttpRequest') return 'json';
  return 'html';
}

// customize error handler, if all present, negotiation will be ignored.
function all(e, ctx) {
  ctx.body = {
    status: 'error',
    code: 500,
    data: e.message,
    stack: e.stack,
  }
  ctx.status = 500
}

module.exports = {
  keys: 'sddads',
  port: 3002,
  // errorPageUrl support funtion
  onerror: {
    errorPageUrl: (err, ctx) => ctx.errorPageUrl || '/500',
    accepts,
    all,
  },
  mysql: {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'journal_db',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  },
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
