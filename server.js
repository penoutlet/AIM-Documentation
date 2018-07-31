var express = require('express')
var app = express()
var port = 3000 || process.env.port

app.get('/', function(req,res){
	res.sendFile('index.html')
})
app.get('/example',function(req,res){
	// res.sendFile('example.html')
	res.send('Under construction')
})

app.listen(port, function(){
	console.log('App listening on port' + port)
})