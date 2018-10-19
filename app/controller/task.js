const Controller = require('egg').Controller

class TaskController extends Controller {
  /** 创建任务 */
  async create() {
    const { ctx, logger } = this
    const { request } = ctx

    try {
      const baseValue = request.body
      const createDate = new Date()
      const userId = ctx.cookies.get('userId')
      const data = await this.app.mysql.insert('task', {
        ...baseValue,
        userId,
        createDate,
      })
      ctx.body = data
    } catch (e) {
      logger.error(e.message)
      ctx.body = e.message
      ctx.status = 500
    }
  }

  /** 获取全量任务列表 */
  async list() {
    try {
      const userId = this.ctx.cookies.get('userId')
      const dayList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'day',
        }
      })
      const weekList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'week',
        }
      })
      const monthList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'month',
        }
      })
      const yearList = await this.ctx.model.Task.findAll({
        where: {
          user_id: userId,
          t_type: 'year',
        }
      })
      // console.log(baseList)
      this.ctx.body = {
        dayList,
        weekList,
        monthList,
        yearList,
      }
    } catch (e) {
      this.ctx.logger.error(e.message)
      this.ctx.body = e.message
      this.ctx.status = 500
    }
  }

  async update() {
    const id = this.ctx.params.id
    const data = this.ctx.request.body
    try {
      const newData = {
        title: data.title,
        desc: data.desc,
        completed: data.completed,
      }
      const updateDate = new Date()
      const res = await this.app.mysql.update('task', {
        ...newData,
        updateDate,
      }, {
        where: { id },
      })
    } catch(e) {
      this.ctx.logger.error(e.message)
      this.ctx.body = e.message
      this.ctx.status = 500
    }
  }

  /** 完成任务 */
  async completed() {
    try {
      //
    } catch(e) {
      this.ctx.logger.error(e.message)
      this.ctx.body = e.message
      this.ctx.status = 500
    }
  }
}

module.exports = TaskController
