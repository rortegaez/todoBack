const express = require('express')
const router = express.Router()
const tareasController = require('../controller/tareas.js')

router.get('/', tareasController.getAll)
router.post('/', tareasController.create)
router.delete('/:id', tareasController.deleteById)
router.put('/:id', tareasController.updateById)
router.get('/:id', tareasController.getById)

module.exports = router