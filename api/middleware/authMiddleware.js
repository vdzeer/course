const jwt = require('jsonwebtoken')
const cfg = require('../services/config')

module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(400).send('User is not logged in!')
    }
    const decodedData = jwt.verify(token, cfg.getValue('secret'))
    req.user = decodedData['0']

    next()
  } catch (e) {
    console.log(e)
    return res.status(400).send('User is not logged in!')
  }
}
