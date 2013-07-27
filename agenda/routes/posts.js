

module.exports = function(app) {
	var posts = app.controllers.posts;
	app.get('/posts', posts.index);
	app.post('/posts', posts.create);
	app.put('/posts', posts.change);
}