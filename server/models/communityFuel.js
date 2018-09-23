const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const communityFuelSchema = mongoose.Schema({
  fuel: { type: Number }
})

module.exports = mongoose.model('CommunityFuel', communityFuelSchema)