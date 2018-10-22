const Service = require('egg').Service

class BookYearService extends Service {
  /** 获取某年数据 */
  async getSingle(year) {
    const user_id = await this.ctx.service.utils.getUserId()
    const target = await this.ctx.model.BookYear.findOrCreate({
      where: { user_id, year },
    }).spread((data, created) => {
      return data.get()
    })
    return target
  }
}

module.exports = BookYearService
