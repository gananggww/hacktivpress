const db = require('../model/articles')
const ObjectId = require('mongodb').ObjectId

const getAllData = (req, res) => {
  db.find().populate({path: 'author', model: 'users'})
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const getOneData = (req, res) => {
  db.findOne({_id: ObjectId(req.params.id)}, {author: req.headers.auth.id}).populate({path: 'author', model: users})
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const createData = (req, res) => {
  db.create({
    title: req.body.title,
    content: req.body.content,
    author: req.headers.auth.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const updateData = (req, res) => {
  db.update({
    _id: ObjectId(req.params.id)
  }, {
    title: req.body.title,
    content: req.body.content,
    author: req.headers.auth.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const getByAuthor = (req, res) => {
  db.find({author: req.headers.auth.username})
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const getByCategory = (req, res) => {
  db.find({category: req.params.category})
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const removeData = (req, res) => {
  db.remove({_id: ObjectId(req.params.id), author: req.headers.auth.id})
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  getAllData,
  getOneData,
  createData,
  updateData,
  getByAuthor,
  getByCategory,
  removeData
}
