'use strict'
const store = require('./../store.js')

const createGameSuccess = function (data) {
  $('#message').text('Good luck!')
  $('.authenticated').hide()
  $('.letPlay').show()
  store.games = data.game
}

const createNewGameSuccess = function (data) {
  store.games = data.game
  $('#message').text('You did it!')
  $('#winning-message').hide()
}

const updateGameSuccessful = function (data) {
  console.log(data)
  if (data.game.over === true) {
    $('#winning-message').show()
    $('#turn').hide()
    $(data.game.cells).empty()
  }
}

const error = function (error) {
  $('message').text('FailFish ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  updateGameSuccessful,
  createNewGameSuccess,
  error
}
