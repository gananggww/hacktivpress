const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const users = require('./router/users')
const articles = require('./router/articles')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost/ganangwahyuwicaksono');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', users)
app.use('/articles', articles)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
