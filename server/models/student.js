const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const studentSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String }
})

// Compare password
studentSchema.methods.comparePassword = (password, databasePassword) => {
  if (password == databasePassword) {
    return true
  }
  return false
}

module.exports = mongoose.model('Student', studentSchema)
