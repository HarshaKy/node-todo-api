const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

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

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var newTask = new Todo({
//   text: 'Something to do'
// });

// newTask.save().then((doc) => {
//   console.log('Saved task');
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('unable to save todo');
// });

var newUser = new User({
  name: 'Harsha Ky  ',
  email: 'harshaky6573@gmail.com  '
});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo');
});
