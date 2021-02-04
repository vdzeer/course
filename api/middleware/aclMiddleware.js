const User = require('../models/user')

module.exports = function (model, column) {
  return async function (req, res, next) {
    const userID = req.user
    const entity = await model.findByID(req.params.id)

    if (!entity) {
      return res.status(404).send(`This does not exist!`)
    }

    const entity_column = entity.rows[0][column]
    const role = await User.getRole(userID)

    if (role.rows[0].role === 'admin') {
      console.log('Welcome, admin!')
      next()
    }

    if (entity_column == userID) {
      next()
    } else {
      return res.status(403).send(`This does not belong to you!`)
    }
  }
}
