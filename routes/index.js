const express = require('express')
const router = express.Router()

const tareasRoutes = require('./tareas')

router
	.use('/tareas', tareasRoutes)

module.exports = router