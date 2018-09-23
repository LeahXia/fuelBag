const express = require('express')

const router = express.Router()
const {
    getAllMentors
} = require('../controllers/mentorController')

router.get(
  '/',
  getAllMentors
)

module.exports = router
