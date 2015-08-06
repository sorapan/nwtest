var express=require('express');
var app=express();
var exports = module.exports = {};

exports.layout1 = function(){

	return 	render('index',{
		fuck:db.hello,
		aa:false
	});;

}