const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articlesSchema = new Schema({
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

const articlesModel = mongoose.model('articles', articlesSchema)

module.exports = articlesModel
