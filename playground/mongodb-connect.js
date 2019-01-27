const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert todo', error);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});