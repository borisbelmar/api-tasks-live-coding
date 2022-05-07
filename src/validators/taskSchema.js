const Joi = require('joi')

const taskCreationSchema = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  done: Joi.boolean()
})

module.exports = {
  taskCreationSchema
}