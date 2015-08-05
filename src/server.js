var express=require('express');
var app=express();

var dbb = require('./db.js');

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static(__dirname+'/public'));

var server=app.listen(3000,function(){});


app.get('/',function(req,res){
	res.render('index',{
		fuck:dbb.hello,
		aa:false
	});
});

