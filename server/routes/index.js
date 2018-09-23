const bodyParser = require('body-parser')

// const authRoute = require('./authRoute')
const studentRoute = require('./studentRoute')
const mentorRoute = require('./mentorRoute')

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
  app.use('/api/student', studentRoute)
  app.use('/api/mentor', mentorRoute)

  app.use(error)
}
