# DJS-Easy-Color
<div align="center">
  <p>
<a href="https://nodei.co/npm/djs-easy-color/"><img src="https://nodei.co/npm/djs-easy-color.png">
</p>
    <br />
    <p>
<a href="https://github.com/Havoc925/DJS-Easy-Color"><img src="https://github.com/Havoc925/DJS-Easy-Color/actions/workflows/Test_get_color.yml/badge.svg" /></a>
<a href="https://github.com/Havoc925/DJS-Easy-Color"><img src="https://badge.fury.io/js/djs-easy-color.svg" /></a>
  </p>
</div>

# Description
Makes getting HEX and RGB values for colors easy with over 130 colors
[List of colors](https://github.com/Havoc925/DJS-Easy-Color/blob/master/test/colors.txt) 
# Example
```javascript
const EasyColor = require("djs-easy-color")

EasyColor.getRGB('blue') //#0000FF
EasyColor.getHEX('blue') //(0,0,255)

EasyColor.getRandomHEX() //Returns random HEX value
EasyColor.getRandomRGB() //Returns random RGB value

EasyColor.getColor(TYPE, COLOR) //Returns RGB or HEX value for color
EasyColor.getRandomColor(TYPE) //Returns random RGB or HEX value

```
