import { Controller } from 'egg';
import * as moment from 'moment';

export default class SummaryController extends Controller {
  /** 获取当天汇总 */
  public async getToday() {
    const today = moment.utc();
    const year = today.year();
    const month = today.month() + 1;

    // get today record data
    const yearData = await this.ctx.service.recordYear.getSingle(year);
    const monthData = await this.ctx.service.recordMonth.getSingle(month, yearData.id);
    this.ctx.body = {
      year: yearData,
      month: monthData,
    };
  }
}
