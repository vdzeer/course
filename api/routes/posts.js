const Router = require('express')
const router = new Router()
const checkAuth = require('../middleware/authMiddleware')
const checkID = require('../middleware/postMiddleware')

module.exports = (controller) => {
  router.get('/', controller.getAllPosts)
  router.get('/:id', controller.getPostByID)
  router.post('/', [checkAuth, controller.createPost])
  router.put('/:id', [checkAuth, checkID, controller.updatePost])
  router.delete('/:id', [checkAuth, checkID, controller.deletePost])

  return router
}
