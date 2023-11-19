var express=require('express');
var app=express();
app.get('/',(req,res)=>{
	res.send("home page");
})
app.get('/about',(req,res)=>{
	res.send("about page");
})
app.get('/delete',(req,res)=>{
	res.send("delete method called");
})
app.listen(3000,()=>{
	console.log("express js Started @3000")
})