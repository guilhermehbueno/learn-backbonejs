module.exports = function(app) {
	var PostController = {
		index: function(req, res){
			var retorno = {
				titulo: "TESTE GUILHERME"
			};
			res.json(retorno);
		},
		create: function(req, res){
			console.log(req.body);
			var retorno = {
				titulo: "TESTE GUILHERME"
			};
			res.json(retorno);
		},
		change: function(req, res){
			console.log(req.body);
			var retorno = {
				titulo: "TESTE GUILHERME"
			};
			res.json(retorno);
		},
		destroy: function(req, res){

		}
	};
	return PostController;
};