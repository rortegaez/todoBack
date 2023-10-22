const Tareas = require ('../models/tareas')

const getAll = async (req, res) => {
	const result = await Tareas.find()
	res.json(result)
}

const create = async (req, res) => {
	const newTareas = new Tareas(req.body)
	newTareas.save((err, saveInfo) => {
		if(err){
			console.log('Ha ocurrido un error', err)
			return res.status(500).json({ error: err })
		}
		return res.json({ Tareas
			: saveInfo })
	})
}

const deleteById = async (req, res) => {
	const TareasToDelete = await Tareas.findByIdAndDelete(req.params.id)
	if(!TareasToDelete){
		return res.json({ message: 'nothing to delete' })
	}
	return res.json({ message: 'ok' })
}

const getById = async (req, res) => {
	const result = await Tareas.findById(req.params.id)
	res.json(result)
}

const updateById = async (req, res) => {
	const result = await Tareas.findByIdAndUpdate(req.params.id, req.body)
	if(!result){
		return res.json({ message: 'nothing to modifier' })
	}
	return res.json({ message: 'ok' })
}

module.exports = { getAll, create, deleteById, updateById, getById }