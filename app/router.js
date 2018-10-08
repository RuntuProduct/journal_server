module.exports = app => {
  const { router, controller } = app
  const baseURL = '/api'

  router.get(`${baseURL}/user`, controller.user.index)
  router.post(`${baseURL}/user`, controller.user.login)
}
