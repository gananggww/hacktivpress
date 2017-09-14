var express = require('express')
var router = express.Router()
const articlesController = require('./controller/articles')

router.get('/login', articlesController.login)
router.get('/register', articlesController.register)

module.exports = router
