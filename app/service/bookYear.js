const Service = require('egg').Service
const BookYear = require('../models/bookYear')

class BookYearService extends Service {
  /** 获取某年数据 */
  async getSingle(year) {
    const userId = this.ctx.cookies.get('userId')
    let target = await BookYear.find({
      userId,
      year,
    }).lean().exec()
    if (!target || !target.length) {
      // 如无该年数据，新增之
      target = await BookYear.create({
        year,
        userId,
      })
    }
    return target[0]
  }
}

module.exports = BookYearService
