const jsonFile = require('../../listofcolors.json')
module.exports = (color) => {
    var colorname = color.toLowerCase()
    if (jsonFile.hasOwnProperty(colorname)) return jsonFile["RGB"];
    else return null;
}