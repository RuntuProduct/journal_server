import { Context, Service } from 'egg';

export default class RecordYearService extends Service {
  constructor(ctx: Context) {
    super(ctx);
  }

  /** 获取某年数据 */
  async getSingle(year: number) {
    const userId = await this.service.utils.getUserId();
    await this.ctx.service.utils.validateYear(year);
    // get year record
    const target = await this.ctx.model.RecordYear.findOrCreate({
      where: {
        user_id: userId,
        year,
      },
    }).spread((data: any) => {
      return data.get();
    });

    // get budget
    const budget = await this.ctx.model.Budget.findOrCreate({
      where: { year_id: target.id },
    }).spread((data: any) => data.get());

    // get year's task
    const taskList = await this.ctx.model.Task.findAll({
      where: {
        user_id: userId,
        t_type: 'year',
        target_id: target.id,
      },
    });

    return {
      ...target,
      budget,
      taskList,
    };
  }
}
