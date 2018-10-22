const Service = require('egg').Service

class UtilsService extends Service {
  /** 获取用户ID */
  async getUserId() {
    const user_id = this.ctx.cookies.get('userId')
    return user_id
  }
}

module.exports = UtilsService
