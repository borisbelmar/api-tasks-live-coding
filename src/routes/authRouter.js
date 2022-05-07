const authRouter = require('express').Router()
const { login, register } = require('../controllers/auth')

authRouter.post('/login', login)
authRouter.post('/register', register)

module.exports = authRouter
