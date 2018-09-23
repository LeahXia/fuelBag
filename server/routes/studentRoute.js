const express = require('express')

const router = express.Router()
const {
  createStudent,
  requireMentorBySpendingFuel,
  getAllRequestedMentors
} = require('../controllers/studentController')
 
router.post(
  '/create',
  createStudent
)

router.post(
  '/:userId/spend',
  requireMentorBySpendingFuel
)

router.get(
  '/:userId/mentors',
  getAllRequestedMentors
)

module.exports = router
