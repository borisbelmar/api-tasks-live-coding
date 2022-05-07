const taskRouter = require('express').Router()
const { getAllTasks, createTask } = require('../controllers/task')

taskRouter.get('/', getAllTasks)
taskRouter.post('/', createTask)

module.exports = taskRouter
