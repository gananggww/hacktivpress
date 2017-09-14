const express = require('express')
const router = express.Router()
const articlesController = require('../controller/articles')
const authen = require('../helper/authentication')

router.get('/all', articlesController.getAllData)
router.get('/:id', articlesController.getOneData)
router.post('/', authen,articlesController.createData)
router.put('/:id', authen,articlesController.updateData)
router.get('/:author', articlesController.getByAuthor)
router.get('/:category', articlesController.getByCategory)
router.delete('/:id', authen, articlesController.removeData)

module.exports = router
