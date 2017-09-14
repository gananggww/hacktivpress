const express = require('express')
const router = express.Router()
const articlesController = require('../controller/articles')
// const authen = require('../helper/authentication')
const jwt = require('jsonwebtoken')

const authen = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token,"livecode")
    console.log('======================',decoded);
    req.headers.auth = decoded
    console.log('======================',req.headers.auth);
    next()
  }
  else {
    res.send("maaf anda harus login")
  }
}


router.get('/all', articlesController.getAllData)
router.get('/:id', articlesController.getOneData)
router.post('/', authen, articlesController.createData)
router.put('/:id', authen,articlesController.updateData)
router.get('/:author', articlesController.getByAuthor)
router.get('/:category', articlesController.getByCategory)
router.delete('/:id', authen, articlesController.removeData)

module.exports = router
