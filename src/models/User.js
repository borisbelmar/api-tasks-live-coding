const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  firstName: 'string',
  lastName: 'string',
  email: {
    type: 'string',
    unique: true
  },
  password: 'string'
});

module.exports = mongoose.model('User', schema);