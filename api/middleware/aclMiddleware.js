const User = require('../models/user')
const permissions = require('../models/permissions')

module.exports = function (rules) {
  return async function (req, res, next) {
    const userID = req.user
    const role = await User.getRole(userID)
    const userPermissions = permissions[role] || []

    let authorized = false

    for await (const rule of rules) {
      if (rule.own) {
        const entity = await rule.own.model.findByID(req.params.id)
        const entity_column = entity.rows[0][rule.own.column]
        if (
          entity_column == userID &&
          userPermissions.some((el) => el === rule.permission)
        ) {
          authorized = true
        }
      } else {
        if (userPermissions.some((el) => el === rule.permission)) {
          console.log('Welcome, admin!')
          authorized = true
        }
      }
    }

    if (authorized) next()
    else return res.status(403).send(`This does not belong to you!`)
  }
}
