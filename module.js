

function myModule(dirName, fileExt, callback){
    var fs = require('fs');
    var files = dirName;
    var filterBy = '.' + fileExt;
    var fileArray = [];

    fs.readdir(dirName, function(err, data){
                if(err){
                    return callback(err);
                }
                    for(var i = 0; i < data.length; i++){
                    var theFile = data[i];
                    var filteredFile = theFile.endsWith(filterBy);
                        if(filteredFile){
                            fileArray.push(theFile);
                        }
                    }
                    callback(null, fileArray);
    });
}
module.exports = myModule;