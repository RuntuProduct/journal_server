import { Controller } from 'egg';

export default class TaskController extends Controller {
  /** 创建任务 */
  public async create() {
    const { now, ...taskProps } = this.ctx.request.body;
    const data = await this.ctx.service.task.create(taskProps, now);
    this.ctx.body = data;
  }

  /** 获取全量任务列表 */
  public async list() {
    const userId = await this.ctx.service.utils.getUserId();
    const dayList = await this.ctx.model.Task.findAll({
      where: { user_id: userId, t_type: 'day' },
    });
    const weekList = await this.ctx.model.Task.findAll({
      where: { user_id: userId, t_type: 'week' },
    });
    const monthList = await this.ctx.model.Task.findAll({
      where: { user_id: userId, t_type: 'month' },
    });
    const yearList = await this.ctx.model.Task.findAll({
      where: { user_id: userId, t_type: 'year' },
    });
    // console.log(baseList)
    this.ctx.body = {
      dayList,
      weekList,
      monthList,
      yearList,
    };
  }

  public async update() {
    // const id = this.ctx.params.id;
    // const data = this.ctx.request.body;
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
  }

  /** 完成任务 */
  public async completed() {
    const { id, completed } = this.ctx.request.body;
    if (!id) {
      throw new Error(`task id is required, but got ${id}`);
    } else if (!(completed === 'Y' || completed === 'N')) {
      throw new Error(`completed field ${completed} is invalid`);
    }
    const userId = await this.ctx.service.utils.getUserId();
    const targetValue = await this.ctx.model.Task.findById(id);
    if (targetValue.user_id !== userId) {
      throw new Error('this task is not belong to you');
    }
    await this.ctx.model.Task.update({
      ...targetValue, completed,
    }, { where: { id } });
    this.ctx.body = 'update success';
  }
}
