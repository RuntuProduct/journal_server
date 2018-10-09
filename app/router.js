module.exports = app => {
  const { router, controller } = app
  const baseURL = '/api'

  router.post(`${baseURL}/login`, controller.user.login)  // 登录
  router.post(`${baseURL}/logout`, controller.user.logout) // 退出登录
  router.get(`${baseURL}/user`, controller.user.index) // 获取用户信息
}
