
/**
 * Module dependencies.
 */

var express = require('express')
  , load = require('express-load')
  , app = express();

  app.configure(function(){
  	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
  });


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

load('models').then('controllers').then('routes').into(app);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});