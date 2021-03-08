const color = require('../src/main.js')
const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('./test/colors.txt'),
});

readInterface.on('line', function(line) {
    console.log(`Color: ${line}, HEX: ${color.getHEX(line)}, RGB: ${color.getRGB(line)}`);
});