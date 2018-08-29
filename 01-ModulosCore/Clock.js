'use strict'

class Clock {
  constructor() {
    setInterval( () => {
      this.theTime()
    }, 1000 )
  }

  theTime() {
    let date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hrsAmPm = ( hrs > 12 ) ? ( hrs - 12) : hrs,
        ampm = ( hrs < 12 ) ? 'am' : 'pm',
        msg = `${this.addZero(hrsAmPm)}:${this.addZero(min)}:${this.addZero(sec)}${ampm}`

        console.log(msg)
  }

  addZero(num) {
    return (num < 10) ? (`0${num}`) : num
  }
}

module.exports = Clock
