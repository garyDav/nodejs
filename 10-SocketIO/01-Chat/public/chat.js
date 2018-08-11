(function(d, _io, $) {
  'use strict'

  let io = _io()

  $('#chat-form').on('submit', function (e) {
    e.preventDefault()
    io.emit( 'new message', $('#message-text').val() )
    $('#message-text').val(null)
    return false;
  })

  io.on('new user', function(newUser) {
    alert(newUser.message)
  })

  io.on('user says', function(userSays) {
    $('#chat').append(`<li>${userSays}</li>`)
  })

  io.on('bye bye user', function(byeByeUser) {
    alert(byeByeUser.message)
  })

})(document, io, jQuery)
