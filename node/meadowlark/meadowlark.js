var express = require('express');

var app = express();

app.set('port',3000 || process.env.PORT);



// set up handlebars view engine
var handlebars = require('express3-handlebars')
                .create({ defaultLayout:'main' });


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
    res.render('home');
    });

app.get('/about', function(req, res) {
    res.render('about');
    });

    // 404 catch-all handler (middleware)
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
    });
    
// 500 error handler (middleware)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
    });

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
    });