const Router = require('express')
const router = new Router()
const validator = require('../middleware/validator')

module.exports = (controller) => {
  router.post('/reg', [
    validator({
      login: ['required', 'login', 'unique:users:login'],
      password: ['required', 'min:6', 'max:25'],
    }),
    controller.register,
  ])
  router.post('/login', controller.login)
  router.get('/check/*', controller.check)
  router.post('/googlelogin', controller.googlelogin)
  router.post('/facebooklogin', controller.facebooklogin)

  return router
}
