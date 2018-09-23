const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const mentorSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String },
  company: { type: String },
  linkedIn: { type: String },
  fuel: { type: Number }
})

module.exports = mongoose.model('Mentor', mentorSchema)
