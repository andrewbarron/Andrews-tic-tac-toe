'use strict'
const store = require('./../store.js')

const createGameSuccess = function (data) {
  $('#message').text('Good luck!')
  $('.authenticated').hide()
  $('.letPlay').show()
  store.game = data.game
  console.log(store.game)
}

const updateGameSuccessful = function (data) {
  console.log('I think this is working')
  console.log(data)
}

const error = function (error) {
  $('message').text('FailFish ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  updateGameSuccessful,
  error
}
