const db = require('../services/db');
class User {
  static async findByName(login) {
    return await db.query(`SELECT * FROM users where login = $1`, [login]);
  }

  static async saveUser(login, password) {
    const user = 
      await db.query(`INSERT INTO users (login, password, isVerify) values ($1, $2, false) RETURNING *`, 
      [login, password]);
    return user;
  }

  static async verify(id) {
    const user = await db.query(`UPDATE users set isVerify = true where id = $1 RETURNING *`, [id]);
    return user;
  }
}

module.exports = User;