const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://HarshaKy:fibonacci12358!@ds143744.mlab.com:43744/deployment'
};
mongoose.connect( (db.localhost || db.mlab), {useNewUrlParser: true});

module.exports = {mongoose};


//
