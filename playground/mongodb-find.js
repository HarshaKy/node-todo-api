// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c4dac8a1d073242c44f3661')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log(error);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count: ' + count);
  // }, (error) => {
  //   console.log(error);
  // });

  db.collection('Users').find({name: 'Mickey'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to find user' ,error);
  });

  client.close();
});
