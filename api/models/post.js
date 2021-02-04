const db = require('../services/db')
class Posts {
  static async findByID(id) {
    return await db.query(`SELECT * FROM post where id = $1`, [id])
  }
}

module.exports = Posts
