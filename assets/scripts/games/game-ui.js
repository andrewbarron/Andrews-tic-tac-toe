'use strict'
const store = require('./../store.js')

const createGameSuccess = function (data) {
  $('#message').text('Good luck!')
  $('.authenticated').hide()
  $('.letPlay').show()
  store.games = data.game
  // console.log(store.games) // game data is correct
}

const updateSuccess = function (response) {
  console.log('nice')
}

const error = function (error) {
  $('message').text('FailFish ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  updateSuccess,
  error
}
