const mongoose = require('mongoose')
const { mentorSchema } = require('../models/mentor')
const { mentorRequestSchema } = require('../models/mentorRequest')

const Mentor = mongoose.model('Mentor', mentorSchema)
const MentorRequest = mongoose.model('MentorRequest', mentorRequestSchema)

module.exports.getAllMentors = async (req, res, done) => {
    try {
        const mentors = await Mentor.find()
        if (mentors) {
            res.status(200).json(mentors)
        } else {
            const err = new Error('No mentor is found')
            err.status = 404
            done(err)
        }
    } catch(error) {
        return done(error)
    }
}

module.exports.getAllStudentsRequiredWithFuel = async (req, res, done) => {
    const mentorId = req.params.userId
    try {
        const mentorRequests = await MentorRequest.find({ 'mentor._id': mentorId })
        if (mentorRequests.length == 0) {
            const err = new Error('No student is found')
            err.status = 404
            return done(err)
        }
        let students = []
        for (const mentorRequest of mentorRequests) {
            students.push(mentorRequest.student)
        }
        res.status(200).json(students)
    } catch(error) {
        return done(error)
    }
}