// var fs = require('fs');
var mymodule = require('./learnyounode62.js')

// fs.readdir(process.argv[2], function (err, data) {
// 	if (err) return console.error(err);
// 	// console.log("eror",err);
// 	// buf = new Buffer(data);
// 	// console.log(data.toString().split(","));
// 	var ext = "."+String(process.argv[3]);
// 	var array =[];
// 	var allFiles = data.toString().split(",");
// 	var allFiles = data;
// 	// console.log(allFiles);
// 	String.prototype.endsWith = function(suffix) {
// 	    return this.indexOf(suffix, this.length - suffix.length) !== -1;
// 	};

// 	for (var i = 0; i < allFiles.length; i++){
// 		if (allFiles[i].endsWith(ext)===true){
// 			array.push(allFiles[i]);
// 		}
// 	}
// 	for (var j = 0; j < array.length; j++) {
// 		console.log(array[j]);
// 	}
// });

mymodule(process.argv[2],process.argv[3]);