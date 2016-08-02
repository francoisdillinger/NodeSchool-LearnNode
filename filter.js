var fs = require('fs');

// Directory name here
var files = process.argv[2];
// File extension to filter by
var filterBy = '.' + process.argv[3];
// readdir() method with 'files' as first argument and callback for second
fs.readdir(files, function(err, list){
    // Iterate over each file returned in the 'list'
    for(var i = 0; i < list.length; i++){
        // variable holding the current file name
        var theFile = list[i];
        // filtering file to check if it ends with 'filterBy' extension
        var filteredFile = theFile.endsWith(filterBy);
        // if there is error it will log it
        if(err){
            console.error(err);
        }
        // if the file being checked does end with the 'filterBy' extension 
        // then it will log the current file being checked
        if(filteredFile){
            console.log(theFile);
        }
    }
})