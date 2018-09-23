const mongoose = require('mongoose')
const { studentSchema } = require('../models/student')

const Student = mongoose.model('Student', studentSchema)

module.exports.createStudent = (req, res, done) => {
  // Create new Student
  const student = new Student(req.body)

  // Save Student
  return student.save()
    .then((newStudent) => {
      return res.status(200).json({ studentId: newStudent._id })
    })
    .catch((error) => {
      return done(error)
    })    
}

