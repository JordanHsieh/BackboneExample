var ListView = Backbone.View.extend({

	render: function() {
		var items = this.model.get('items');

		_.each(items, function(item) {
			var itemView = new ItemView({ model: item });
			this.$el.append(9 itemView.render().el);
		}, this);
	}
});

var ItemView = Backbone.View.extend({
	events: {},

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});

