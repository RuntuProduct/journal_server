module.exports = () => {
  /** 检查用户登录态 */
  return async function authentication(ctx, next) {
    const userId = ctx.cookies.get('userId')
    ctx.logger.info(`userId: ${userId}`)
    if (!userId || userId === '') {
      ctx.body = {
        status: 'error',
        code: 401,
        data: 'user not login yet',
      }
      ctx.status = 401
      return
    } else {
      await next()
    }
  }
}