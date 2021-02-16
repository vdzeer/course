const db = require('../services/db')
class User {
  static async findByName(login) {
    return await db.query(`SELECT * FROM users where login = $1`, [login])
  }

  static async saveUser(login, password, isVerify) {
    const user = await db.query(
      `INSERT INTO users (login, password, isVerify, role) values ($1, $2, $3, 'user') RETURNING *`,
      [login, password, isVerify]
    )
    return user
  }

  static async getRole(id) {
    return await db.query(`SELECT role FROM users where id = $1`, [id])
  }

  static async verify(id) {
    const user = await db.query(
      `UPDATE users set isVerify = true where id = $1 RETURNING *`,
      [id]
    )
    return user
  }
}

module.exports = User
