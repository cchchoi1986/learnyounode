var http = require('http');
var url = require('url');
var server = http.createServer(function(request,response){
	response.writeHead(200, { 'Content-Type': 'application/json' });
	var parsedString = new Date(url.parse(request.url, true).query.iso);
	console.log(parsedString);

	// output = {
	// 	"hour": parsedString.getHours(),
	// 	"minutes": parsedString.getMinutes(),
	// 	"second": parsedString.getSeconds()
	// }
	// console.log(output);
	
	var unixtime = {
		"unixtime": JSON.stringify(parsedString)
	}
	// console.log(unixtime);

	// console.log(request);

})
server.listen(process.argv[2]);