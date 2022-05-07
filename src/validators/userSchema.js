const Joi = require('joi')

const registerSchema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

module.exports = {
  registerSchema,
  loginSchema
}