var libphonenumber = require('libphonenumber');

var get_number = function(string, country) {
	var nr_arr = string.split(',');
	
	for (var i=0; i < nr_arr.length; i++) {
		var nr  = libphonenumber.phoneUtil.parseAndKeepRawInput(nr_arr[i], country || 'es');
		if (libphonenumber.phoneUtil.isValidNumber(nr) ) {
			return libphonenumber.phoneUtil.format(nr,1); // 1 is internationl format
		}
	};	
}



console.log(get_number('tickets: 0161 385 3211, venue: 020 8463 2000', 'gb'));
console.log(get_number('0161 950 5000', 'gb'));
console.log(get_number('(01) 676 6170','ie'));
console.log(get_number('070 345 345','be'));
console.log(get_number('044 316 77 77','ch'));
console.log(get_number('04 67 17 69 69','fr'));
console.log(get_number('0180 / 54 81 81 81','de'));
console.log(get_number('+49 (0)30-20 60 70 80','de'));
