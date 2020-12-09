'use strict'

const createGameSuccess = function (response) {
  console.log(response.game)

  $('#message').text('Good luck!')
}
const error = function (error) {
  $('message').text('FailFish ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  error
}
