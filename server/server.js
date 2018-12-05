var mongoose = require('./db/mongoose');

// // configure mongoose to use the default Javascript promise
// mongoose.Promise = global.Promise;

// // mongoose will remember the db connection
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// define a model
// notice the validators we use in each property

var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	})

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({
			todos
		})
	}, (e) => {
		res.status(400).send(e);
	})
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {
	app
}

// create an instance
// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// // save() method from the model will do the mongodb operation
// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc)
// }, (e) => {
// 	console.log('Unable to save todo')
// })

// var user = new User({
// 	email: 'junfeng@ymail.com'
// });

// user.save().then((doc) => {
// 	console.log('User saved', doc)
// }, e => {
// 	console.log('Unable to save user', e)
// });