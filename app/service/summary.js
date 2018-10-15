const Service = require('egg').Service

class SummaryService extends Service {
  /** 获取年汇总 */
  async getYear(year) {
    const yearData = await this.ctx.service.bookYear.getSingle(year)
    // 根据年数据获取月数据
    const monthId = yearData._id
    const monArr = await this.ctx.service.bookMonth.getByYearId(monthId)
    return {
      ...yearData,
      months: monArr,
    }
  }
}

module.exports = SummaryService
