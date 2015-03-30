var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
	console.log(fs.createReadStream(process.argv[3]).pipe(response));

	// console.log(request);
	// console.log(response);
})
server.listen(process.argv[2]);


// answers:
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))