'use strict'

// let myData = require('./my-data.js')
// No es necesario colocar la extención require admite .json y .js
let myData = require('./my-data'),
    Clock = require('./clock-es5'),
    cucu = new Clock()

console.log(
  myData.name,
  myData.email,
  myData._phone
)

cucu.on('tictac',function() {
	cucu.theTime()
})
