const User = require('../models/user')

module.exports = function (model, column, usersPermissions) {
  return async function (req, res, next) {
    const userID = req.user
    const entity = await model.findByID(req.params.id)

    if (!entity) {
      return res.status(404).send(`This does not exist!`)
    }

    const entity_column = entity.rows[0][column]
    // const role = await User.getRole(userID)

    const userPermissions = usersPermissions.filter((el) => el.id == userID)[0]
      .permissions

    console.log()
    if (
      userPermissions.includes('updateAnyPost') &&
      userPermissions.includes('deleteAnyPost')
    ) {
      console.log('Welcome, admin!')
      next()
    }

    if (
      entity_column == userID &&
      userPermissions.includes('updateOwnPost') &&
      userPermissions.includes('deleteOwnPost')
    ) {
      next()
    } else {
      return res.status(403).send(`This does not belong to you!`)
    }
  }
}
