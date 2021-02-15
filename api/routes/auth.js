const Router = require('express')
const router = new Router()

module.exports = (controller) => {
  router.post('/reg', controller.register)
  router.post('/login', controller.login)
  router.get('/check/*', controller.check)
  return router
}
