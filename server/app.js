const express = require('express')
var cors = require('cors')

const app = express()

app.use(cors())

require('./start/security')(app)
require('./start/db')()

require('./routes/index')(app)

// Listen to server
const port = process.env.PORT || 3000
const host = '0.0.0.0'

app.listen(port, host, () => {
    console.log('Server started on port', port, ':', host, '...')// eslint-disable-line
})
