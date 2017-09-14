const db = require('../model/articles')

const getAllData = (req, res) {
  db.find()
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const getOneData = (req, res) {
  db.findOne({_id: objectId(req.params.id)})
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAllData,
  getOneData
  createData,
  readData,
  updateData,
  getByAuthor
  getByCategory
  removeData
}
