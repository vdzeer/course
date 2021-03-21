const db = require('../services/db')
const fs = require('fs')

class UserController {
  async getAllUsers(req, res) {
    const users = await db.query(`SELECT * FROM users`)
    res.json(users.rows)
  }

  async getUserByID(req, res) {
    const id = req.params.id
    const user = await db.query(`SELECT * FROM users where id = $1`, [id])
    res.json(user.rows)
  }

  async getUserAvatar(req, res) {
    const id = req.params.id
    const avatar = await db.query(`SELECT avatar FROM users where id = $1`, [
      id,
    ])
    res.json(avatar.rows[0].avatar)
  }

  async postUserAvatar(req, res) {
    const id = req.params.id
    const data = req.body.image.toString().split(',')
    const format = data[0].split(';')[0].split('/')

    const raw = new Buffer(data[1], 'base64')
    const name = `image-${Date.now()}.${format[1]}`
    fs.writeFile(
      `/home/vadim/Projects/course/front/public/uploads/${name}`,
      raw,
      function (err) {
        if (err) return console.log(err)
        console.log('Saved!')
      }
    )

    const user = await db.query(
      `UPDATE users set avatar = $1 where id = $2 RETURNING *`,
      [name, id]
    )
  }

  async updateUser(req, res) {
    const { name, surname } = req.body
    const user = await db.query(
      `UPDATE users set name = $1, surname = $2 where id = $4 RETURNING *`,
      [name, surname, req.params.id]
    )
  }
}

module.exports = new UserController()
