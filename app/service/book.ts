import { Service } from 'egg';
import { Moment } from 'moment';

export default class BookService extends Service {
  /**
   * 初始化今日数据
   *
   * @param {Moment} day 今日时间
   */
  async initToday(
    day: Moment,
  ) {
    if (!day || !day.isValid()) {
      throw new Error('invalid day value');
    }
    const userId = await this.ctx.service.utils.getUserId();

    // init year data
    const yearValue = day.year();
    const yearData = await this.ctx.model.BookYear.findOrCreate({
      where: { year: yearValue, user_id: userId },
    }).spread((v) => v);
    // init year budget
    const yearId = yearData.id;
    const yearBudgetData = await this.ctx.model.Budget.findOrCreate({
      where: { year_id: yearId },
    }).spread((v) => v);
    yearData.budget = yearBudgetData;

    // init month data
    const monthValue = day.month() + 1;
    const monthData = await this.ctx.model.BookMonth.findOrCreate({
      where: { month: monthValue, user_id: userId, year_id: yearId },
    }).spread((v) => v);

    // init week data
    const weekValue = day.format();
    const weekData = await this.ctx.model.BookWeek.findOrCreate({
      where: { day: weekValue, user_id: userId, year_id: yearId },
    }).spread((v) => v);

    // init day data
    const dayValue = day.format();
    const monthId = monthData.id;
    const dayData = await this.ctx.model.BookDay.findOrCreate({
      where: { day: dayValue, user_id: userId, year_id: yearId, month_id: monthId },
    }).spread((v) => v);

    return {
      yearData,
      monthData,
      weekData,
      dayData,
    };
  }
}
