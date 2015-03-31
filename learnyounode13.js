var http = require('http');
var url = require('url');
var server = http.createServer(function(request,response){

	response.writeHead(200, { 'Content-Type': 'application/json' });

	var parsedURL = url.parse(request.url, true);
	var parsedString = new Date(parsedURL.query.iso);
	var pathway = parsedURL.pathname;
	var output = '{\"hour\":'+parsedString.getHours()+',\"minute\":'+parsedString.getMinutes()+',\"second\":'+parsedString.getSeconds()+'}';
	var unixtime = '{\"unixtime\":'+parsedString.getTime()+'}';
	if (pathway == '/api/parsetime'){
		response.write(output);
	}
	if (pathway == '/api/unixtime'){
		response.write(unixtime);
	}
	response.end();
}).listen(process.argv[2]);


// answers:
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))