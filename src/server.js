var express=require('express');
var app=express();

var db = require('./db');
var vwincldr = require('./lib/viewincluder');

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static(__dirname+'/public'));

var server=app.listen(3000,function(){});


app.get('/',function(req,res){
	res.render('index',{
		fuck:db.hello,
		incld:'footer'
	});
});

