const Task = require('../../models/Task')
const { taskCreationSchema } = require('../../validators/taskSchema')

async function createTask(req, res) {
  const payload = req.body

  try {
    await taskCreationSchema.validateAsync(payload)
  } catch (err) {
    res.status(400).send(err.message)
    return
  }

  try {
    const task = await Task.create({ ...payload, userId: req.user.sub })
    res.status(201).send(task)
  } catch(err) {
    console.log(err)
  }
}

module.exports = createTask
