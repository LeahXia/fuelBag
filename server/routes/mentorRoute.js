const express = require('express')

const router = express.Router()
const {
    getAllMentors,
    getAllStudentsRequiredWithFuel
} = require('../controllers/mentorController')

router.get(
  '/',
  getAllMentors
)

router.get(
    '/:userId/students',
    getAllStudentsRequiredWithFuel
  )

module.exports = router
