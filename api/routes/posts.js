const Router = require('express');
const router = new Router();
const checkAuth = require('../middleware/authMiddleware');

module.exports = (controller) => {
  router.get('/', controller.getAllPosts);
  router.get('/:id', controller.getPostByID);
  router.post('/', [checkAuth, controller.createPost]);
  router.put('/:id', [checkAuth, controller.updatePost]);
  router.delete('/:id', [checkAuth, controller.deletePost]);

  return router;
};