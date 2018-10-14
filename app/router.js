module.exports = app => {
  const { router, controller } = app
  const baseURL = '/api'

  router.post(`${baseURL}/login`, controller.user.login)  // 登录
  router.post(`${baseURL}/logout`, controller.user.logout) // 退出登录
  router.get(`${baseURL}/user`, controller.user.index) // 获取用户信息

  // 任务相关
  router.get(`${baseURL}/task`, controller.task.list) // 获取全量列表
  router.post(`${baseURL}/task`, controller.task.create) // 创建任务
}
