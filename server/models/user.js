const mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    default: 'Harsha'
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    default: 'something@gmail.com'
  }
});

module.exports = {User};
