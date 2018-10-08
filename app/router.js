module.exports = app => {
  const { router, controller } = app

  router.get('/user', controller.user.index)
  router.post('/user', controller.user.login)
}
