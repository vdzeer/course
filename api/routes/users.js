const Router = require('express')
const router = new Router()

const checkAuth = require('../middleware/authMiddleware')
const validator = require('../middleware/validator')

module.exports = (controller) => {
  router.get('/', controller.getAllUsers)
  router.get('/:id', controller.getUserByID)
  router.get('/:id/avatar', controller.getUserAvatar)
  router.post('/:id/avatar', [controller.postUserAvatar])
  router.put('/:id', [
    // checkAuth,
    // validator({
    //   title: ['required', 'min:1', 'max:40'],
    //   content: ['required', 'min:1', 'max:500'],
    //   access: ['oneOf:onlyMe:friends:all'],
    // }),
    controller.updateUser,
  ])
  return router
}
