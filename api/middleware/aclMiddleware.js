const User = require('../models/user')
const permissions = require('../models/permissions')

module.exports = function ([...data]) {
  return async function (req, res, next) {
    const [admin, user] = data,
      userID = req.user,
      model = user.own.model,
      column = user.own.column

    const entity = await model.findByID(req.params.id)
    if (!entity) {
      return res.status(404).send(`This does not exist!`)
    }

    const role = await User.getRole(userID)
    const userPermissions = permissions[role] || []

    if (userPermissions.some((el) => el === admin.permission)) {
      console.log('Welcome, admin!')
      next()
    }

    const entity_column = entity.rows[0][column]
    if (
      entity_column == userID &&
      userPermissions.some((el) => el === user.permission)
    ) {
      next()
    } else {
      return res.status(403).send(`This does not belong to you!`)
    }
  }
}
