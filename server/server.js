const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

var newTask = new Todo({
  text: 'Learn Node.js',
  completed: true,
  completedAt: 545
})
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

newTask.save().then((doc) => {
  console.log('Saved task');
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('unable to save todo');
});
