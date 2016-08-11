var http = require('http');
var path = process.argv[2];

http.get(path, function(response){
    var theData = [];
        response
        .on("error", function(error){
            console.error(error);
        })
        .on("data", function(data){
            theData.push(data);
        })
        .on("end", function(){
            var stuff = theData.toString();
            var theString = stuff.replace(/,/g, "");

            var characterCount = theString.length;
            console.log(characterCount);
            console.log(theString);
        });
})



   
