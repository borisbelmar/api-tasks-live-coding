const { verifyToken } = require("../lib/jwt")

function tokenValidation (req, res, next) {
  const authorization = req.headers.authorization

  if (!authorization) {
    res.status(401).send('Token not provided')
    return
  }

  const [beginning, token] = authorization.split(' ')

  if (beginning !== 'Bearer') {
    res.status(401).send('Token not provided')
    return
  }

  try {
    const decoded = verifyToken(token)
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).send(err.message)
    return
  }
}

module.exports = tokenValidation