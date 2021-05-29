const color = require('../src/main.js')
const times = 100

let i
for (i = 0; i < times; i++) {
    console.log(`${i}, HEX: ${color.getRandomgen("HEX")}`)
}