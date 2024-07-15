

const fs = require('fs')
fs.readFile('3.txt', 'utf-8', (err, data) => {
    console.log(data);
})
fs.writeFile('3.txt',"Hello There How are You next?", (err) => {
   if(err) {
    console.log("Error while writing the file:- \n" + err);
   }
   else{
    console.log("Writen Succesfully!")
    fs.readFile('3.txt', 'utf-8', (err, data) => {
        console.log(data);
    })
   }
})