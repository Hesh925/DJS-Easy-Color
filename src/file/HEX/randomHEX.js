const jsonFile = require('../../listofcolors.json')
module.exports = (color) => {
    let k, n = 0;
    JSON.stringify(jsonFile, (key, value) => (key && ++n || value));
    n *= Math.random();
    JSON.stringify(jsonFile, (key, value) => (key && --n | 0 || (k = key) || value));
    return jsonFile[k]['HEX']
}