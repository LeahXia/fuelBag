const mongoose = require('mongoose')
const { mentorSchema } = require('../models/mentor')

const Mentor = mongoose.model('Mentor', mentorSchema)

module.exports.getAllMentors = async (req, res, done) => {
    const mentors = await Mentor.find()
    if (mentors) {
        res.status(200).json(mentors)
    } else {
        const err = new Error('No mentor is found')
        err.status = 404
        done(err)
    }
}

