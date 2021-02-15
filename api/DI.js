const inject = require('require-all')

const routes = inject(__dirname + '/routes')
const controllers = inject(__dirname + '/controllers')

module.exports = {
  routes,
  controllers,
  // db: require('./db')
}
