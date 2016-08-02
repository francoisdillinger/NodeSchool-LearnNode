

var sum = 0;
for(var i = 2; i < process.argv.length; i++){
    var argValue = Number(process.argv[i]);
    sum += argValue;
}
console.log(sum);