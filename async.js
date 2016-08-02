var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, function(err, data) {
    var str = data.toString().split("\n").length;
    var answer = str - 1;
    console.log(answer);
});

