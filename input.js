var fs = require('fs');
var theFile = fs.readFileSync(process.argv[2]);
var str = theFile.toString();
var splitString = str.split("\n");
var numOfLines = splitString.length;
var answer = numOfLines - 1;
console.log(answer);
