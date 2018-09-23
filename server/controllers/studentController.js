const mongoose = require('mongoose')
const { studentSchema } = require('../models/student')
const { mentorSchema } = require('../models/mentor')
const { mentorRequestSchema } = require('../models/mentorRequest')

const Student = mongoose.model('Student', studentSchema)
const Mentor = mongoose.model('Mentor', mentorSchema)
const MentorRequest = mongoose.model('MentorRequest', mentorRequestSchema)

module.exports.createStudent = async (req, res, done) => {
  // Create new Student
  const student = new Student(req.body)
  // Save Student
  try {
    const newStudent = await student.save()
    return res.status(200).json({ studentId: newStudent._id })
  } catch (error) {
    return done(error)
  }
} 

module.exports.requireMentorBySpendingFuel = async (req, res, done) => {
  const studentId = req.params.userId
  const mentorId = req.body.mentorId
  const fuelSpent = req.body.fuelSpent

  try {
    const student = await Student.findById(studentId)
    const mentor = await Mentor.findById(mentorId)

    const mentorRequire = new MentorRequest({
      student,
      mentor,
      fuelSpent
    })

    const databaseMentorRequire = await MentorRequest.findOne({
      'student._id': studentId ,
      'mentor._id': mentorId
    })

    if (databaseMentorRequire) {
      let err = new Error('Request is already existed')
      err.status = 400
      return done(err)
    }
    await mentorRequire.save()
    res.status(200).json({ sentDate: mentorRequire.sentDate })
  } catch (err) {
    done(err)
  }
}

module.exports.getAllRequestedMentors = async (req, res, done) => {
  const studentId = req.params.userId

  try {
    const mentorRequests = await MentorRequest.find({ 'student._id': studentId })
    
    if (mentorRequests.length == 0) {
      let err = new Error('No request found')
      err.status = 404
      return done(err)
    }
    let mentors = []
    for(const mentorRequest of mentorRequests) {
      mentors.push(mentorRequest.mentor)
    }
    res.status(200).json(mentors)
  } catch(error) {    
    return done(error)
  }
}
