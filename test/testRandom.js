const color = require('../src/main.js')
const times = 100

for (i = 0; i < times; i++) {
    console.log(color.getRandomHEX())
}
//console.log(color.getRandomRGB())