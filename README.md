# DJS-Easy-Color
<div align="center">
<a href="https://nodei.co/npm/djs-easy-color/"><img src="https://nodei.co/npm/djs-easy-color.png">
<a href="https://github.com/Havoc925/DJS-Easy-Color"><img src="https://github.com/Havoc925/DJS-Easy-Color/actions/workflows/Test_get_color.yml/badge.svg" /></a>
<a href="https://github.com/Havoc925/DJS-Easy-Color"><img src="https://badge.fury.io/js/djs-easy-color.svg" /></a>
</div>

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
