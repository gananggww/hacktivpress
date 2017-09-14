const db = require('../model/users')

const register = (req, res) => {
  db.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const login = (req, res) => {
  db.findOne({username:req.body.username})
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  login,
  register
}
