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
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5c00e450873462725ac2a6ad')
	}, {
		$set: {
			completed: false
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});

