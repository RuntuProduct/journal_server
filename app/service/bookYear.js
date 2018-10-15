const Service = require('egg').Service

class BookYearService extends Service {
  /** 获取某年数据 */
  async getSingle(year) {
    const userId = this.ctx.cookies.get('userId')
    let target = await this.app.mysql.get('book_year', {
      userId,
      year,
    })
    if (!target || !target.length) {
      // 如无该年数据，新增之
      target = await this.app.mysql.insert('book_year', {
        year,
        userId,
      })
    }
    return target
  }
}

module.exports = BookYearService
