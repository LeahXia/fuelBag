require('dotenv').config()
const mongoose = require('mongoose')

module.exports = () => {
    // mongoose connection 
    mongoose.Promise = global.Promise    
    mongoose.connect(process.env.DB, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to database')// eslint-disable-line
    })
    .catch((error) => {
        console.log('Error connecting to database', error)// eslint-disable-line
    })
}
