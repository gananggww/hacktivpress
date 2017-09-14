const db = require('../model/articles')
const ObjectId = require('mongodb').ObjectId

const getAllData = (req, res) => {
  db.find()
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const getOneData = (req, res) => {
  db.findOne({_id: ObjectId(req.params.id)})
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
    content: req.body.title,
    author: req.body.author
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
    content: req.body.title,
    author: req.body.author
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const getByAuthor = (req, res) => {
  db.find({author: req.params.author})
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
  db.remove({_id: ObjectId(req.params.id)})
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
