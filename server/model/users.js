const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel
