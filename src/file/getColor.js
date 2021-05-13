const jsonFile = require('../listofcolors.json')
const checkType = require('./CheckType')
module.exports = (type, color) => {
    var cType = checkType(type)
    if (cType !== null){
        var colorname = color.toLowerCase()
        if (jsonFile.hasOwnProperty(colorname)) return jsonFile[colorname][cType];
        else return null;
    }
}
