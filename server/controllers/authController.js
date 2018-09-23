const mongoose = require('mongoose')

const { mentorSchema } = require('../models/mentor')
const { studentSchema } = require('../models/student')
// const { mentorRequestSchema } = require('../models/mentorRequest')

const Mentor = mongoose.model('Mentor', mentorSchema)
const Student = mongoose.model('Student', studentSchema)
// const MentorRequest = mongoose.model('MentorRequest', mentorRequestSchema)

module.exports.loginUser = async (req, res, done) => {
    const email = req.body.email
    const pw = req.body.password

    try {
        const mentor = await Mentor.findOne({ email })
        if (mentor) {
            if (mentor.password != pw) {
                const err = new Error('Password invalid')
                err.status = 400
                return done(err)
            }
            return res.status(200).json(mentor)
        }

        const student = await Student.findOne({ email })
        if (student) {
            if (student.password != pw) {
                const err = new Error('Password invalid')
                err.status = 400
                return done(err)
            }
            return res.status(200).json(student)
        }

        const err = new Error('No user is found')
        err.status = 404
        done(err)
    } catch(error) {
        return done(error)
    }
}
