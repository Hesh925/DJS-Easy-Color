const color = require('../src/main.js')
const times = 130

for (i = 0; i < times; i++) {
    console.log(`${i}, HEX: ${color.getRandomColor("HEX")}, RGB: ${color.getRandomColor("RGB")}`);
}