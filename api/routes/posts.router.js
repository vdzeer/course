const Router = require('express');
const router = new Router();
const postController = require('../controllers/posts.controller');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostByID);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;