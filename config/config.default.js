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
  sequelize: {
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    host: '127.0.0.1',
    port: 3306,
    database: 'journal_db',
    define: {
      timestamps: true,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
    },
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
