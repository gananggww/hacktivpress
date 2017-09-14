const express = require('express')
const router = express.Router()
const articlesController = require('../controller/articles')

router.get('/all', articlesController.getAllData)
router.get('/:id', articlesController.getOneData)
router.post('/', articlesController.createData)
router.put('/:id', articlesController.updateData)
router.get('/:author', articlesController.getByAuthor)
router.get('/:category', articlesController.getByCategory)
router.delete('/:id', articlesController.removeData)

module.exports = router
