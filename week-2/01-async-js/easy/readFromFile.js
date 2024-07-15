const fs = require('fs');

fs.readFile('3.txt', 'utf-8', function(err,data) {
    console.log(data);
    // console.log(err)
} )



ans = 0;

console.log(new Date());
for (let index = 0; index < 10000000000; index++) {
    ans ++
}
console.log(new Date());

console.log(ans);