var http = require('http')
const bl = require('bl')
hash = {};
urls = process.argv.slice(2);
count = 0;
// function get(url) {
// 	http.get(url, function (response) {
// 	  	response.pipe(bl(function(err, data){
// 	  		if (err)
// 	  			return console.error(err)
// 	  		data = data.toString();
// 	  		// console.log(data);
// 	  		array.push(data);
// 	  	}))
// 	  	response.on('end', function(data) {
//             count++;
//         });
// 	  // response.on('error', console.error)
// 	})
// }
count= 0;

var getData = function(i) {
	if (count < urls.length) {
		http.get(urls[i], function (response) {
		  	response.pipe(bl(function(err, data){
		  		if (err)
		  			return console.error(err)
		  		data = data.toString();
		  		console.log(data);
		  		// console.log(index);
		  	}))
		  	response.on('end', function(){
		  		count++;
		  		getData(count);	
		  	});
		});
	}
}

getData(count);



// answers:
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)