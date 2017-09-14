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
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

const articlesModel = mongoose.model('articles', articlesSchema)

module.exports = articlesModel
