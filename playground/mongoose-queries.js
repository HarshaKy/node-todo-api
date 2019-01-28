var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

var id = '5c4ec5b37a229a1cd0301a86';

// Todo.find({
//   _id: id
// }).then((todos) => {
//   // console.log('1st');
//   if (todos.length === 0) {
//     return console.log('Id not found');
//   }
//
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   // console.log('2nd');
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   // console.log('3rd');
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log('Invalid Id'));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log('User', user);
}).catch((e) => console.log('Invalid id/ user not found'));
