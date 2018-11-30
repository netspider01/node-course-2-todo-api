const { MongoClient, ObjectID } = require('mongodb');

// this is how you can manually generate an object id
// but most likely you won't need it, you should just let mongo to auto generate it for you
// var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// this is how you do a query
	// db.collection('Todos').find({
	// 	completed: true
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// query by ID
	// use a plain string would not work
	// db.collection('Todos').find({
	// 	_id: new ObjectID('5c00e450873462725ac2a6ad')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// this is how you do a count
	db.collection('Todos').find({
		completed: false
	}).count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	// db.close();
});

