import { Service } from 'egg';

export default class RecordDay extends Service {

  /** 获取某天数据 */
  async getSingle(
    day: string,
    monthId: string,
    yearId: string,
  ) {
    const userId = await this.service.utils.getUserId();

    // get day record
    const target = await this.ctx.model.RecordDay.findOrCreate({
      where: { day, user_id: userId, year_id: yearId, month_id: monthId },
    }).spread((data: any) => data.get());

    // get day task
    const taskList = await this.ctx.model.Task.findAll({
      where: { user_id: userId, t_type: 'month', target_id: target.id },
    });

    return {
      ...target,
      taskList,
    };
  }
}
