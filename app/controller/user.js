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
      ctx.status = 204
      return
    }
    const data = await User.findById(userId).exec()
      .catch(e => {
        logger.error(e.message)
        ctx.body = e.message
        ctx.status = 300
      })
    if (!data) {
      ctx.body = 'user not exist'
      ctx.status = 204
    } else {
      ctx.body = data
    }
  }

  /** 用户登录 */
  async login() {
    const { ctx, logger } = this
    const { request } = ctx

    const { account, password  } = request.body
    try {
      const data = await User.find({ account, password }, ['username'])
      ctx.body = data[0]
    } catch(e) {
      logger.error(e.message)
      ctx.body = e.message
      ctx.status = 300
    }
  }
}

module.exports = UserController