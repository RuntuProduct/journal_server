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
}

module.exports = TaskController
