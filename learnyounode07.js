var http = require('http');

http.get(process.argv[2], function(response) {
  // console.log(response);
  response.on('data', function(e) {
  	console.log(e);
  });
});


// answers:
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })