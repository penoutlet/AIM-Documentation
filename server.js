var express = require('express')
var app = express()
var port = 3000 || process.env.port
app.use(express.static('public'));
app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/index.html')
})
app.get('/example',function(req,res){
	res.sendFile(__dirname + '/public/example.html')
})
app.get('/documentation',function(req,res){
	res.sendFile(__dirname + '/public/documentation.html')
})

app.listen(port, function(){
	console.log('App listening on port' + port)
})