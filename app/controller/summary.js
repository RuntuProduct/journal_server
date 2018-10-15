const Controller = require('egg').Controller

const YEAR_MIN = 2018
const YEAR_MAX = 4018

class SummaryController extends Controller {
  /** 获取年汇总 */
  async year() {
    const getYear = this.ctx.query.year
    let day
    if (getYear) {
      if (getYear < YEAR_MIN || getYear > YEAR_MAX) {
        this.ctx.body = `illegal year value: it should be between ${YEAR_MIN} and ${YEAR_MAX}`
        this.ctx.status = 500
        return
      }
      try {
        day = new Date(getYear)
      } catch(e) {
        this.ctx.body = 'illegal day\'s timestamp'
      }
    } else {
      day = new Date()  // 获取服务器今天时间
    }
    const year = day.getFullYear() // 获取年数
    if (year < YEAR_MIN && getDay) {
      this.ctx.body = `illegal year value of day\'s timestamp, minimum year is ${YEAR_MIN}`
      this.ctx.status = 500
      return
    }
    this.ctx.body = year
  }
}

module.exports = SummaryController
