const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const mentorSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String },
  company: { type: String },
  linkedIn: { type: String }
})

// Compare password
mentorSchema.methods.comparePassword = (password, databasePassword) => {
  if (password == databasePassword) {
    return true
  }
  return false
}

module.exports = mongoose.model('Mentor', mentorSchema)
