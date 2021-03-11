# DJS-Easy-Color
[![Node.js CI](https://github.com/Havoc925/DJS-Easy-Color/actions/workflows/Test_get_color.yml/badge.svg)](https://github.com/Havoc925/DJS-Easy-Color/actions/workflows/Test_get_color.yml)
[![NPM Publish](https://github.com/Havoc925/DJS-Easy-Color/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Havoc925/DJS-Easy-Color/actions/workflows/npm-publish.yml)

# Description
Makes getting hex codes and RGB values for colors easy with over 130 colors
[List of colors](https://github.com/Havoc925/DJS-Easy-Color/blob/master/test/colors.txt) 
# Example
```javascript
const EasyColor = require("djs-easy-color")

console.log(EasyColor.getRGB('blue')) //#0000FF
console.log(EasyColor.getHEX('blue')) //(0,0,255)

console.log(EasyColor.getRandomHEX()) //Returns random HEX value
console.log(EasyColor.getRandomRGB()) //Returns random RGB value
```
