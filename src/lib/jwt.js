const jwt = require('jsonwebtoken')

const SECRET = process.env.JWT_SECRET

function generateToken(user) {
  const payload = {
    sub: user.id,
    email: user.email
  }
  return jwt.sign(payload, SECRET, {
    expiresIn: '7d'
  })
}

function verifyToken(token) {
  return jwt.verify(token, SECRET)
}

module.exports = {
  generateToken,
  verifyToken
}