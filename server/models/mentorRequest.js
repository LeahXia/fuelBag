const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const mentorRequestSchema = mongoose.Schema({
  mentor: {
    _id: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
    company: { type: String },
    linkedIn: { type: String }
  },
  student: {
    _id: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String }
  },
  sentDate: { type: Date, default: Date.now() },
  fuelSpent: { type: Number }
})

module.exports = mongoose.model('MentorRequest', mentorRequestSchema)
