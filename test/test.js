const color = require('../src/main.js')
const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('./test/colors.txt'),
});
i = 0
readInterface.on('line', function (line) {
    console.log(`${i},Color: ${line}, HEX: ${color.getColor("HEX", line)}, RGB: ${color.getColor("RGB", line)}`);
    i = i + 1
});