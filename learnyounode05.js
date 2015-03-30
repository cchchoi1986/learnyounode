var fs = require('fs');

fs.readdir(process.argv[2], function (err, data) {
	if (err) return console.error(err);
	// console.log("eror",err);
	// buf = new Buffer(data);
	// console.log(data.toString().split(","));
	var ext = "."+String(process.argv[3]);
	var array =[];
	var allFiles = data.toString().split(",");
	var allFiles = data;
	// console.log(allFiles);
	String.prototype.endsWith = function(suffix) {
	    return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};

	for (var i = 0; i < allFiles.length; i++){
		if (allFiles[i].endsWith(ext)===true){
			console.log(allFiles[i]);
		}
	}
});

// answers:
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })