const bodyParser = require('body-parser')

// const authRoute = require('./authRoute')

const error = require('../middleware/error')

module.exports = (app) => {
  // bodyParser middleware
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  // Route
  app.get('/', (req, res) => {
    res.send('Welcome Fuel Bag')
  })

  // app.use('/api/auth', authRoute)

  app.use(error)
}