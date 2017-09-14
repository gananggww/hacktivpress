const db = require('../model/users')
const jwt = require('jsonwebtoken')

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
    if(response.password == req.body.password) {
      let token = jwt.sign({_id: response._id, username: response.username}, 'livecode')
      res.send({token: token, username: response.username})
    } else {
      res.send({token: null})
    }
  })
  .catch(err => {
    res.send({token: null, error: err})
  })
}

module.exports = {
  login,
  register
}
