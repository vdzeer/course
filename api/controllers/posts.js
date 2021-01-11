const db = require('../db');

class PostController {
  async getAllPosts(req, res) {
    const posts = await db.query(`SELECT * FROM post`);
    res.json(posts.rows);
  }

  async getPostByID(req, res) {
    const id = req.query.id;
    const post = await db.query(`SELECT * FROM post where id = $1`, [id]);
    res.json(post.rows);
  }

  async createPost(req, res) {
    const {title, content} = req.body;
    const newPost = await db.query(`INSERT INTO post (title, content) values ($1, $2) RETURNING *`, [title, content]);
    res.json(newPost.rows[0]);
  }

  async updatePost(req, res) {
    const {id, title, content} = req.body;
    const post = await db.query(`UPDATE post set title = $1, content = $2 where id = $3 RETURNING *`, [title, content, id]);
    res.json(post.rows[0]);
  }

  async deletePost(req, res) {
    const id = req.params.id;
    const post = await db.query(`DELETE FROM post where id = $1`, [id]);
    res.json(post.rows[0]);
  }
}

module.exports = new PostController();