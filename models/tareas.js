const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tareasSchema = new Schema({
	title: String,
	task: String,
	limit: Date
})

const Tareas = mongoose.model('Tareas', tareasSchema)

module.exports = Tareas