const db = require('../services/db')

module.exports = function validator(data) {
  return async (req, res, next) => {
    for ([field, rules] of Object.entries(data)) {
      for (rule of rules) {
        const [objectRule, ...params] = rule.split(':')
        switch (objectRule) {
          case 'required':
            if (!req.body[field]) {
              res.status(400).send(`Field '${field}' is required!`)
            }
            break
          case 'min':
            const min = parseInt(params[0])
            if (req.body[field].length < min) {
              res
                .status(400)
                .send(`Field '${field}' is short! Min length is ${min}`)
            }
            break
          case 'max':
            const max = parseInt(params[0])
            if (req.body[field].length > max) {
              res
                .status(400)
                .send(`Field '${field}' is long! Max length is ${max}`)
            }
            break
          case 'oneOf':
            if (!params.includes(req.body[field])) {
              res
                .status(400)
                .send(`Field '${field}' must be one of: ${params.join(', ')}`)
            }
            break
          case 'login':
            if (
              !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
                req.body[field]
              )
            ) {
              res.status(400).send(`Field '${field}' not email!`)
            }
            break
          case 'unique':
            const fld = await db.query(`SELECT * FROM $1 where $2 = $3`, [
              params[0],
              params[1],
              req.body[field],
            ])
            if (fld.rowCount) {
              if (!(params[3] && req.params.id === fld.rows[0].id))
                return res
                  .status(400)
                  .send(`Field '${field}' is already exist!`)
            }
            break
        }

        return next()
      }
    }
  }
}
