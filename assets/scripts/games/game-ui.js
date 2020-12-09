'use strict'
const gameEvents = require('./game-events.js')
const store = require('./../store.js')

const createGameSuccess = function (data) {
  $('#message').text('Good luck!')
  $('.authenticated').hide()
  $('.letPlay').show()
  store.game = data.game
  console.log(store.game)
  $('#turn').text(`It is ${gameEvents.turn}'s turn`)
}

const error = function (error) {
  $('message').text('FailFish ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  error
}
