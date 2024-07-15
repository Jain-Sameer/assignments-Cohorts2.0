const { count } = require('console');
const fs = require('fs')

fs.readFile('fileCleaner.txt', 'utf-8', function(err, data){
    console.log("Before : ", data);
    const newData = data.split(/\s+/).join(' ');
    
    fs.writeFile('fileCleaner.txt', newData, function(err){
        if(err) console.log(err);
        else {
            console.log("File Updated Succesfully")
        }
    })
    fs.readFile('fileCleaner.txt', 'utf-8', function(err, data){
        console.log("After: ", data);
    })
})

