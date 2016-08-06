var http = require('http');
var path = process.argv[2];

http.get(path, function(response){
    var theData = [];
        response
        .on("data", function(data){
            theData.push(data);
        })
        .on("error", function(error){
            console.error(error);
        })
        .on("end", function(){
            var stuff = theData.toString();
            var theString = stuff.replace(/,/g, "");

            var characterCount = theString.length;
            console.log(characterCount);
            console.log(theString);
        });
})


// var http = require('http')  
//      var bl = require('bl')  
       
//      http.get(process.argv[2], function (response) {  
//        response.pipe(bl(function (err, data) {  
//          if (err)  
//            return console.error(err)  
//          data = data.toString()  
//          console.log(data.length)  
//          console.log(data)  
//        }))    
//      })  
   
