import { Controller } from 'egg';

export default class TaskController extends Controller {
  /** 创建任务 */
  public async create() {
    try {
      const {
        title,
        description,
        t_type,
        target_id,
        now,
      } = this.ctx.request.body;
      const data = await this.ctx.service.task.create({
        title,
        description,
        t_type,
        target_id,
      }, now);
      this.ctx.body = data;
    } catch (e) {
      this.logger.error(e.message);
      this.ctx.body = e.message;
      this.ctx.status = 500;
    }
  }

  /** 获取全量任务列表 */
  public async list() {
    try {
      const userId = await this.ctx.service.utils.getUserId();
      const dayList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'day',
        },
      });
      const weekList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'week',
        },
      });
      const monthList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'month',
        },
      });
      const yearList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'year',
        },
      });
      // console.log(baseList)
      this.ctx.body = {
        dayList,
        weekList,
        monthList,
        yearList,
      };
    } catch (e) {
      this.ctx.logger.error(e.message);
      this.ctx.body = e.message;
      this.ctx.status = 500;
    }
  }

  public async update() {
    // const id = this.ctx.params.id;
    // const data = this.ctx.request.body;
    try {
      // const newData = {
      //   title: data.title,
      //   desc: data.desc,
      //   completed: data.completed,
      // };
      // const updateDate = new Date();
      // const res = await this.app.mysql.update('task', {
      //   ...newData,
      //   updateDate,
      // }, {
      //   where: { id },
      // })
    } catch (e) {
      this.ctx.logger.error(e.message);
      this.ctx.body = e.message;
      this.ctx.status = 500;
    }
  }

  /** 完成任务 */
  public async completed() {
    try {
      //
    } catch (e) {
      this.ctx.logger.error(e.message);
      this.ctx.body = e.message;
      this.ctx.status = 500;
    }
  }
}
