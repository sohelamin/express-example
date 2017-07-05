var express = require('express');
var router = express.Router();

var postController = require('./../controllers/post');

router.get('/', postController.index);

router.get('/create', postController.getCreate);

router.post('/', postController.postCreate);

router.get('/:postId', postController.show);

router.get('/:postId/edit', postController.edit);

router.post('/:postId', postController.update);

router.post('/:postId/delete', postController.delete);

module.exports = router;
