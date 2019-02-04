require('./config/config');

const _ = require('lodash')
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST todos
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// POST users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

// GET todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET users
app.get('/users', (req, res) => {
  User.find().then((users) => {
    res.send({users});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET todos by id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectId.isValid(id)) {
    res.status(404).send('Not valid');
  }

  Todo.findById(id).then((todo) => {
    // console.log('3rd');
    if (!todo) {
      res.status(404).send('Todo not found');
    }
    res.send({todo});
  }).catch((e) => console.log('Invalid Id'));

});

// DELETE todos by id
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectId.isValid(id)) {
    res.status(404).send('Not a valid ID');
  }

  Todo.findByIdAndDelete(id).then((todo) => {
    if (!todo) {
      res.status(404).send('Todo not found');
    }

    res.send({todo});
  }).catch((e) => console.log('invalid ID'));
});

// UPDATE/PATCH todos by id
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectId.isValid(id)) {
    res.status(404).send('Not valid');
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(400).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

// GET user after authentication
app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = {app};
