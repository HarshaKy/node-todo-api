const {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndDelete()
// Todo.findByIdAndDelete()

Todo.findByIdAndDelete('5c4f4a5deddd622d505f002f').then((todo) => {
  console.log(todo);
});
