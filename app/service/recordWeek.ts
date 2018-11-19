import { Service } from 'egg';

export default class RecordService extends Service {

  /** 获取某周数据 */
  async getSingle(
    day: string,
    yearId: string,
  ) {
    const userId = await this.service.utils.getUserId();

    // get week record
    const target = await this.ctx.model.RecordWeek.findOrCreate({
      where: {
        day,
        user_id: userId,
        year_id: yearId,
      },
    }).spread((data: any) => {
      return data.get();
    });

    if (target) {
      // get week task
      const taskList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'week',
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
