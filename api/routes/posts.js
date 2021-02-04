const Router = require('express')
const router = new Router()
const checkAuth = require('../middleware/authMiddleware')
const aclMiddleware = require('../middleware/aclMiddleware')
const Post = require('../models/post')

module.exports = (controller) => {
  router.get('/', controller.getAllPosts)
  router.get('/:id', controller.getPostByID)
  router.post('/', [checkAuth, controller.createPost])
  router.put('/:id', [
    checkAuth,
    aclMiddleware(Post, 'user_id'),
    controller.updatePost,
  ])
  router.delete('/:id', [
    checkAuth,
    aclMiddleware(Post, 'user_id'),
    controller.deletePost,
  ])

  return router
}
