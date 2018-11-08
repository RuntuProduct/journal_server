import { Controller } from 'egg';
import * as moment from 'moment';

export default class SummaryController extends Controller {
  /** 获取当天汇总 */
  public async getToday() {
    const today = moment.utc();
    const year = today.year();
    const month = today.month() + 1;
    const day = today.format();

    // get today record data
    const yearData = await this.service.recordYear.getSingle(year);
    const monthData = await this.service.recordMonth.getSingle(month, yearData.id);
    const weekData = await this.service.recordWeek.getSingle(day, yearData.id);
    const dayData = await this.service.recordDay.getSingle(day, yearData.id, monthData.id);

    this.ctx.body = {
      yearData,
      monthData,
      weekData,
      dayData,
    };
  }
}
