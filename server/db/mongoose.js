const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://<UserName>:<password>@ds143744.mlab.com:43744/deployment'
};
mongoose.connect((process.env.PORT ? db.mlab : db.localhost), {useNewUrlParser: true});

module.exports = {mongoose};


//
