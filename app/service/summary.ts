import { Context, Service } from 'egg';

export default class SummaryService extends Service {
  constructor(ctx: Context) {
    super(ctx);
  }

  /** 获取年汇总 */
  async getYear(year: number) {
    const yearData = await this.ctx.service.bookYear.getSingle(year);
    // 根据年数据获取月数据
    const monthId = yearData.id;
    const monArr = await this.ctx.service.bookMonth.getByYearId(monthId);
    return {
      ...yearData,
      months: monArr,
    };
  }
}
