const db = require('../services/db')

class PostController {
  async getAllPosts(req, res) {
    const limit = req.query.limit || 5
    const posts = await db.query(`SELECT * FROM post limit $1`, [limit])
    res.json(posts.rows)
  }

  async getPostByID(req, res) {
    const id = req.params.id
    const post = await db.query(`SELECT * FROM post where id = $1`, [id])
    res.json(post.rows)
  }

  async createPost(req, res) {
    const { title, text, access } = req.body
    const newPost = await db.query(
      `INSERT INTO post (title, content, access) values ($1, $2, $3) RETURNING *`,
      [title, text, access]
    )
  }

  async updatePost(req, res) {
    const { title, text, access } = req.body
    const post = await db.query(
      `UPDATE post set title = $1, content = $2, access = $3 where id = $4 RETURNING *`,
      [title, text, access, req.params.id]
    )
  }

  async deletePost(req, res) {
    const id = req.params.id
    const post = await db.query(`DELETE FROM post where id = $1`, [id])
    res.json(post.rows[0])
  }
}

module.exports = new PostController()
