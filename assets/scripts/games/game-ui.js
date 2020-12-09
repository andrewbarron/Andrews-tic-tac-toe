'use strict'

const createGameSuccess = function (response) {
  $('#message').text('Good luck!')
  $('.authenticated').hide()
  $('.letPlay').show()
}

const error = function (error) {
  $('message').text('FailFish ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  error
}
