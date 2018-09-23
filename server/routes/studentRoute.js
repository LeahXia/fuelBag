const express = require('express')

const router = express.Router()
const {
  createStudent,
  getAllRequestedMentors
} = require('../controllers/studentController')
 
router.post(
  '/create',
  createStudent
)

router.get(
  '/:userId/mentors',
  getAllRequestedMentors
)

module.exports = router
