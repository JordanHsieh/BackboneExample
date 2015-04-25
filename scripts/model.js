// var Todo = Backbone.Model.extend({
// 	defaults: {
// 		completed: false
// 	},
// 	initialize: function() {
// 		console.log('This model has been initialized.');
// 		this.on("invalid", function(model, error) {
// 			console.log(error);
// 		})
// 	},

// 	validate: function(attrs) {
// 		if(attrs.title === undefined) {
// 			return 'Remember to set a title for your todo';
// 		}
// 	}

// });

// var myTodo = new Todo();
// myTodo.set('completed', true, {validate: true});
// console.log('completed: ' + myTodo.get('completed'));