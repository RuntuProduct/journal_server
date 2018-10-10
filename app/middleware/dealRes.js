module.exports = () => {
  /** 返回体统一处理 */
  return async function dealRes(ctx, next) {
    await next()

    const code = ctx.status || 200
    const data = ctx.response.body || ctx.body

    if (code !== 200) {
      ctx.body = {
        status: 'error',
        code,
        data: data,
      }
    } else {
      ctx.body = {
        status: 'success',
        code,
        data: data,
      }
    }
    ctx.status = code
  }
}
