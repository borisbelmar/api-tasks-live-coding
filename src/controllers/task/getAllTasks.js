const Task = require('../../models/Task')

async function getAllTasks(req, res) {
  const tasks = await Task.find({
    userId: req.user.sub
  })
  res.send(tasks)
}

module.exports = getAllTasks
