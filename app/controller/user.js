const Controller = require('egg').Controller
const User = require('../models/user')

class UserController extends Controller {
  /** 获取用户详情 */
  async index() {
    const { ctx, logger } = this
    const { request } = ctx

    const { userId } = request.query
    if (!userId || userId === '') {
      ctx.body = 'userId is require'
      ctx.status = 202
      return
    }
    try {
      const data = await User.findById(userId).exec()
      if (!data) {
        ctx.body = 'user not exist'
        ctx.status = 204
      } else {
        ctx.body = data
      }
    } catch(e) {
      logger.error(e.message)
      ctx.body = e.message
      ctx.status = 500
    }
  }

  /** 用户登录 */
  async login() {
    const { ctx, logger } = this
    const { request } = ctx

    const { account, password  } = request.body
    try {
      const data = await User.find({ account, password }, ['username'])
      const now = new Date()
      const targetTime = new Date()
      targetTime.setTime(now.getTime() + 1800000)
      ctx.cookies.set('userId', data[0]['_id'], {
        // expires: targetTime,
        httpOnly: false,
        maxAge: 300 * 60 * 1000,
      })
      ctx.body = data[0]
    } catch(e) {
      logger.error(e.message)
      ctx.body = e.message
      ctx.status = 500
    }
  }
}

module.exports = UserController