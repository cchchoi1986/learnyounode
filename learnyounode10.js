var net = require('net')
var server = net.createServer(function (socket) {
	// console.log('connected');
	var date = new Date();
	console.log(date);
	var string = zeroFill(date.getFullYear())+"-"+zeroFill(date.getMonth()+1)+"-"+zeroFill(date.getDate())+" "+zeroFill(date.getHours())+":"+zeroFill(date.getMinutes());

	socket.end(string);
	// });
})
server.listen(process.argv[2]);


// answers:
// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))