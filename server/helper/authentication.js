const jwt = require('jsonwebtoken')

const authen = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token,"shhhhh")
    req.headers.oten = decoded
    next()
  }
  else {
    res.send("maaf anda harus login")
  }
}

module.exports = {
  authen
}
