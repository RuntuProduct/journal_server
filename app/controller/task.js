const Controller = require('egg').Controller
const Task = require('../models/task')

class TaskController extends Controller {
  /** 创建任务 */
  async create() {
    const { ctx, logger } = this
    const { request } = ctx

    try {
      const baseValue = request.body
      const createDate = new Date()
      const userId = ctx.cookies.get('userId')
      const data = await Task.create({
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
      const dayList = await Task.find({
        userId: userId,
        type: 'day',
      }).lean().exec()
      const weekList = await Task.find({
        userId: userId,
        type: 'week',
      }).lean().exec()
      const monthList = await Task.find({
        userId: userId,
        type: 'month',
      }).lean().exec()
      const yearList = await Task.find({
        userId: userId,
        type: 'year',
      }).lean().exec()
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
    const _id = this.ctx.params._id
    const data = this.ctx.request.body
    try {
      const newData = {
        title: data.title,
        desc: data.desc,
        completed: data.completed,
      }
      const updateDate = new Date()
      const res = await Task.update({
        _id,
      }, {
        ...newData,
        updateDate,
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
