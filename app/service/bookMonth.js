const Service = require('egg').Service
const BookMonth = require('../models/bookMonth')

class BookMonthService extends Service {
  /** 根据年Id获取月数组 */
  async getByYearId(yearId) {
    const userId = this.ctx.cookies.get('userId')
    const monthArr = await this.app.mysql.get('book_month', {
      yearId,
      userId,
    })
    return monthArr
  }
}

module.exports = BookMonthService
