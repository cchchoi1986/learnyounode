// console.log(process.argv);
// console.log(process.argv.length);
var sum = function(text){
	total = 0;
	for (var i = 2; i < text.length; i++){
		total = total + Number(text[i]);
		// console.log(i)
	};
	return total;
};

console.log(sum(process.argv));

// answers:
// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

// console.log(result)