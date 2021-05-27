const checkType = require('./CheckType')

function Rvalue(minv, maxv) {
    min = Math.ceil(minv);
    max = Math.floor(maxv);
    return Math.floor(Math.random() * (max - min) + min);
}
function getRGB() {
    var R = Rvalue(0,255)
    var G = Rvalue(0,255)
    var B = Rvalue(0,255)
    return (`${R},${G},${B}`)
}
function RGBtoHEX(R,G,B) {

}
module.exports = (type, color) => {
    var cType = checkType(type)
    if (cType !== null){
        if (cType === "RGB") {
            return getRGB()
        }
        if (cType === "HEX") {
            
        }
        
        
    }
}