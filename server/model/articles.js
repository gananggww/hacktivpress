const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articlesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})

const articlesModel = mongoose.model('articles', articlesSchema)

module.exports = articlesModel
