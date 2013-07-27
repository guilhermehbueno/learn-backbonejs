var PostModel = Backbone.Model.extend({
	urlRoot: 'posts',
    defaults: {
        title: '',
        text: ''
    }
});