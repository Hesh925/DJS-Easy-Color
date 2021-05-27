const color = require('../src/main.js');
const fs = require('fs');
const now = require("performance-now");
const times = 100;

var timeArray = new Array;

var start1 = now();
for (i = 0; i < times; i++) {
    var start = now();
    color.getRandomGen("RGB");
    var end = now();

    var time = (end-start).toFixed(6);
    console.log(`Call Time:  ${time}`);
    fs.writeFile(`TestRandomGen.log`, `${time}\n`, { flag: 'a+' }, err => {});
    timeArray.push(time)
}s
var end1 = now();
console.log(`TOTAL TIME: ${(end1-start1).toFixed(6)}`);

var total = 0
timeArray.forEach(function (time) {
    total += time        
});
console.log(total / time.length)




