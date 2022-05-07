const bcrypt = require('bcryptjs')
const { registerSchema } = require('../../validators/userSchema')
const User = require('../../models/User')

async function register(req, res) {
  const payload = req.body

  try {
    await registerSchema.validateAsync(payload)
  } catch(err) {
    res.status(400).send(err.message)
    return
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10)

  try {
    const user = await User.create({ ...payload, password: hashedPassword })
    res.status(201).send(user)
  } catch(err) {
    console.log(err)
  }
}

module.exports = register
