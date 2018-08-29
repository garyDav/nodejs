/*
Código encerrado en una función anónima autoejecutable
https://www.etnassoft.com/2011/03/14/funciones-autoejecutables-en-javascript/
*/
'use strict'

var Clock = (function() {
  const EventEmitter = require('events').EventEmitter,
	      inherits = require('util').inherits;

  // constructor
  var Clock = function() {
    var self = this

    setInterval(function() {
      self.emit('tictac')
    }, 1000)
  }

  inherits(Clock, EventEmitter)

  Clock.prototype.theTime = function() {
    var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec

    console.log(msg)
  }

})()

module.exports = Clock
