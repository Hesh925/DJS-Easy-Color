const color = require("../../src/main.js");
const times = 130;

let i;
for (i = 0; i < times; i++) {
	console.log(`${ i }, HEX: ${ color.getRandomColor("HEX") }, RGB: ${ color.getRandomColor("RGB") }`);
}