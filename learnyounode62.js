module.exports = function (arg1, arg2) {
	fs.readdir(arg1, function (err, data) {
		if (err) return console.error(err);
		var ext = "."+String(arg2);
		var array =[];
		var allFiles = data;
		String.prototype.endsWith = function(suffix) {
		    return this.indexOf(suffix, this.length - suffix.length) !== -1;
		};

		for (var i = 0; i < allFiles.length; i++){
			if (allFiles[i].endsWith(ext)===true){
				array.push(allFiles[i]);
			}
		}
		for (var j = 0; j < array.length; j++) {
			console.log(array[j]);
		}
	});
}