const bcrypt = require('bcryptjs')
const { loginSchema } = require('../../validators/userSchema')
const User = require('../../models/User')
const { generateToken } = require('../../lib/jwt')

async function login(req, res) {
  const payload = req.body

  try {
    await loginSchema.validateAsync(payload)
  } catch(err) {
    res.status(401).send('Invalid credentials')
    return
  }

  const user = await User.findOne({ email: payload.email })

  if (!user || !bcrypt.compareSync(payload.password, user.password)) {
    res.status(401).send('Invalid credentials')
    return
  }

  const token = generateToken(user)
  
  res.json({
    token
  })
}

module.exports = login
