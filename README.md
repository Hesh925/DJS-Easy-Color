# DJS-Easy-Color
<div align="center">
  <p>
<a href="https://nodei.co/npm/djs-easy-color/"><img src="https://nodei.co/npm/djs-easy-color.png">
</p>
    <br />
    <p>
<a href="https://github.com/Havoc925/DJS-Easy-Color"><img src="https://github.com/Havoc925/DJS-Easy-Color/actions/workflows/Test_get_color.yml/badge.svg" /></a>
<a href="https://github.com/Havoc925/DJS-Easy-Color"><img src="https://badge.fury.io/js/djs-easy-color.svg" /></a>
<a href="https://deepscan.io/dashboard#view=project&tid=10962&pid=17363&bid=395840"><img src="https://deepscan.io/api/teams/10962/projects/17363/branches/395840/badge/grade.svg" alt="DeepScan grade"></a>
  </p>
</div>

# Description
Makes getting HEX and RGB values for colors easy with over 130 colors
[List of colors](https://github.com/Havoc925/DJS-Easy-Color/blob/master/test/colors.txt) 
# Example
```javascript
const EasyColor = require("djs-easy-color")

EasyColor.getColor(TYPE, COLOR) //Returns RGB or HEX value for color
EasyColor.getRandomColor(TYPE) //Returns random RGB or HEX value
EasyColor.getRandomGen(TYPE) //Returns randomly generated color with HEX or RGB value
```
