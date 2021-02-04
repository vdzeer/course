const jwt = require('jsonwebtoken')
const Post = require('../models/post')

module.exports = async function (req, res, next) {
  const userID = req.user
  const post = await Post.findByID(req.params.id)
  if (post.rows[0].user_id == userID) {
    console.log('Your post!')
    next()
  } else {
    console.error('This post does not belong to you!')
    return res.status(403).send('This post does not belong to you!')
  }
}
