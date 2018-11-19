import { Service } from 'egg';

export default class RecordMonthService extends Service {

  /** 获取某月数据 */
  async getSingle(
    month: number,
    yearId: string,
  ) {
    const userId = await this.service.utils.getUserId();
    await this.ctx.service.utils.validateMonth(month);

    // get month record
    const target = await this.ctx.model.RecordMonth.find({
      where: {
        month,
        user_id: userId,
        year_id: yearId,
      },
    });

    if (target) {
      // get month task
      const taskList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'month',
          target_id: target.id,
        },
      });
      return {
        ...target,
        taskList,
      };
    } else {
      return null;
    }

  }
}
