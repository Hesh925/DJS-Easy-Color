const color = require('../src/main.js')
const fs = require('fs')
const performance = require("performance-now")
const { log } = require('console')
const times = 1

function RandomGen() {
    for (i = 0; i < times; i++) {
        var returnedv = color.getRandomGen("RGB")
        console.log(returnedv);
        fs.writeFile(`TestRandomGen.log`, `${returnedv}\n`, { flag: 'a+' }, err => {})
    }
}
console.log("Starting Test")

console.time('RandomGen')
RandomGen()
console.timeEnd('RandomGen')