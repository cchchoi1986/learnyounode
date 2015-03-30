var fs = require('fs');

module.exports = function (arg1, arg2, callback) {
	fs.readdir(arg1, function (err, data) {
		if (err) 
			return callback(err) // early return
		var array =[];
		var allFiles = data;
		String.prototype.endsWith = function(suffix) {
		    return this.indexOf(suffix, this.length - suffix.length) !== -1;
		};
		for (var i = 0; i < allFiles.length; i++){
			if (allFiles[i].endsWith("."+String(arg2))===true){
				array.push(allFiles[i]);
				console.log(allFiles[i]);				
			}
		}
        callback(null, array)
	});
}

// answers
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }