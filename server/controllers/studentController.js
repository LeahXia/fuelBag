const mongoose = require('mongoose')
const { studentSchema } = require('../models/student')
const { mentorSchema } = require('../models/mentor')
const { mentorRequestSchema } = require('../models/mentorRequest')
const { communityFuelSchema } = require('../models/communityFuel')

const Student = mongoose.model('Student', studentSchema)
const Mentor = mongoose.model('Mentor', mentorSchema)
const MentorRequest = mongoose.model('MentorRequest', mentorRequestSchema)
const CommunityFuel = mongoose.model('CommunityFuel', communityFuelSchema)

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
  const fuelSpent = parseInt(req.body.fuelSpent)

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

    // Handle Fuel
    const communityFuel = await CommunityFuel.findOne({})
    
    communityFuel.fuel += fuelSpent
    student.fuel -= fuelSpent
    mentor.fuel += fuelSpent

    await communityFuel.save()
    await student.save()
    await mentor.save()

    res.status(200).json({ sentDate: mentorRequire.sentDate, fuelLeft: student.fuel })
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
