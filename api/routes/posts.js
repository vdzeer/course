const Router = require('express');
const router = new Router();

module.exports = (controller) => {
  router.get('/', controller.getAllPosts);
  router.get('/:id', controller.getPostByID);
  router.post('/', controller.createPost);
  router.put('/:id', controller.updatePost);
  router.delete('/:id', controller.deletePost);

  return router;
};