const mongoose = require('mongoose') //引用mongoose模块
const settings = require('./config/dbSetting')

module.exports = app => {
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://'+ settings.host +':'+ settings.port +'/'+ settings.db, { useNewUrlParser: true }) //创建一个数据库连接
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:')) // 错误处理
    db.once('open', function (callback) {
      // 数据库第一次开启的回调函数
      app.logger.info('connect database success')
    })
  });
};