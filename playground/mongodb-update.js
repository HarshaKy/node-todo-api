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

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c4db2bd138d5fab2d37fdb0')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: true
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Harsha Ky'
  }, {
    $inc: {
      age: 1
    },
    $set: {
      location: 'Bangalore'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
});
