const db = require('../services/db')
const fs = require('fs')

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
    const data = req.body.image.toString().split(',')
    const format = data[0].split(';')[0].split('/')

    const raw = new Buffer(data[1], 'base64')
    const image = `image-${Date.now()}.${format[1]}`
    fs.writeFile(
      `/home/vadim/Projects/course/front/public/uploads/${image}`,
      raw,
      function (err) {
        if (err) return console.log(err)
        console.log('Saved!')
      }
    )

    if (image) {
      const newPost = await db.query(
        `INSERT INTO post (title, content, access, image) values ($1, $2, $3, $4) RETURNING *`,
        [title, text, access, image]
      )
    } else {
      const newPost = await db.query(
        `INSERT INTO post (title, content, access) values ($1, $2, $3) RETURNING *`,
        [title, text, access]
      )
    }
  }

  async updatePost(req, res) {
    const { title, text, access } = req.body
    const data = req.body.image.toString().split(',')
    const format = data[0].split(';')[0].split('/')

    const raw = new Buffer(data[1], 'base64')
    const image = `image-${Date.now()}.${format[1]}`
    fs.writeFile(
      `/home/vadim/Projects/course/front/public/uploads/${image}`,
      raw,
      function (err) {
        if (err) return console.log(err)
        console.log('Saved!')
      }
    )

    if (image) {
      const post = await db.query(
        `UPDATE post set title = $1, content = $2, access = $3, image = $4 where id = $5 RETURNING *`,
        [title, text, access, image, req.params.id]
      )
    } else {
      const post = await db.query(
        `UPDATE post set title = $1, content = $2, access = $3 where id = $4 RETURNING *`,
        [title, text, access, req.params.id]
      )
    }
  }

  async deletePost(req, res) {
    const id = req.params.id
    const post = await db.query(`DELETE FROM post where id = $1`, [id])
    res.json(post.rows[0])
  }
}

module.exports = new PostController()
