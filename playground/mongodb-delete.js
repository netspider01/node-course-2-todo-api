const { MongoClient, ObjectID } = require('mongodb');

// this is how you can manually generate an object id
// but most likely you won't need it, you should just let mongo to auto generate it for you
// var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// delete many
	db.collection('Todos').deleteMany({
		text: 'Eat lunch'
	}).then((result) => {
		console.log(result);
	});

	// deleteOne
	db.collection('Todos').deleteOne({
		text: 'Eat supper'
	}).then(result => {
		console.log(result);
	});

	// findOneAndDelete

	// db.close();
});

