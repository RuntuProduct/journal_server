const Controller = require('egg').Controller
const User = require('../models/user')

class UserController extends Controller {
  /** 获取用户详情 */
  async index() {
    const { ctx, logger } = this

    const userId = ctx.cookies.get('userId')
    if (!userId || userId === '') {
      ctx.body = 'user not login yet'
      ctx.status = 204
      return
    }
    try {
      const data = await User.findById(userId, ['username']).exec()
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
        // httpOnly: false,
        maxAge: 300 * 60 * 1000,
      })
      // 调用 rotateCsrfSecret 刷新用户的 CSRF token
      ctx.rotateCsrfSecret()
      ctx.body = data[0]
    } catch(e) {
      logger.error(e.message)
      ctx.body = e.message
      ctx.status = 500
    }
  }

  /** 退出登录 */
  async logout() {
    const { ctx } = this

    ctx.cookies.set('userId', '', {
      maxAge: 0,
    })
    ctx.body = 'logout success'
  }
}

module.exports = UserController