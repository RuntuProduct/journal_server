import { Context, Service } from 'egg';
import * as moment from 'moment';

export default class TaskService extends Service {
  constructor(ctx: Context) {
    super(ctx);
  }

  /**
   * 创建任务
   *
   * @param {object} taskProps 任务内容对象
   * @param {number | string} now 创建任务时的时间
   */
  async create(
    taskProps: any,
    now: number | string,
  ) {
    // param check
    const {
      title,
      description,
      t_type,
      target_id,
    } = taskProps;
    const dayObj: moment.Moment = now ?
      moment.utc(now) :
      moment.utc();
    // check if now valid
    if (!dayObj.isValid()) {
      throw new Error(`invalid now value ${now}`);
    }
    const daytime = dayObj.format();
    this.logger.info(daytime);
    // 前置操作，初始化今日数据
    const {
      yearData,
      monthData,
      weekData,
      dayData,
    } = await this.ctx.service.record.initToday(dayObj);
    const userId = await this.ctx.service.utils.getUserId();
    const taskObj = {
      title,
      description,
      user_id: userId,
      t_type,
      target_id: false,
    };
    if (t_type === 'year') {
      taskObj.target_id = target_id || yearData.id;
    } else if (t_type === 'month') {
      taskObj.target_id = target_id || monthData.id;
    } else if (t_type === 'week') {
      taskObj.target_id = target_id || weekData.id;
    } else {
      taskObj.target_id = target_id || dayData.id;
    }
    const data = await this.ctx.model.Task.create(taskObj);
    return data;
  }
}
