const jsonFile = require('../listofcolors.json')
const checkType = require('./CheckType')
module.exports = (type) => {
    var cType = checkType(type)
    if (cType !== null){
    let k, n = 0;
    JSON.stringify(jsonFile, (key, value) => (key && ++n || value));
    n *= Math.random();
    JSON.stringify(jsonFile, (key, value) => (key && --n | 0 || (k = key) || value));
    return jsonFile[k][cType]
    }
}