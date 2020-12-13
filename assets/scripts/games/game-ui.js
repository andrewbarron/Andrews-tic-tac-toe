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
  const winner = 'Winner'
  if (response.game.cells[0] === response.game.cells[1] && response.game.cells[0] === response.game.cells[2] && response.game.cells[0] !== '') {
    console.log(winner)
  } else if (response.game.cells[3] === response.game.cells[4] && response.game.cells[3] === response.game.cells[5] && response.game.cells[3] !== '') {
    console.log(winner)
  } else if (response.game.cells[6] === response.game.cells[7] && response.game.cells[6] === response.game.cells[8] && response.game.cells[6] !== '') {
    console.log(winner)
  } else if (response.game.cells[0] === response.game.cells[3] && response.game.cells[0] === response.game.cells[6] && response.game.cells[0] !== '') {
    console.log(winner)
  } else if (response.game.cells[1] === response.game.cells[4] && response.game.cells[1] === response.game.cells[7] && response.game.cells[1] !== '') {
    console.log(winner)
  } else if (response.game.cells[2] === response.game.cells[5] && response.game.cells[2] === response.game.cells[8] && response.game.cells[2] !== '') {
    console.log(winner)
  } else if (response.game.cells[0] === response.game.cells[4] && response.game.cells[0] === response.game.cells[8] && response.game.cells[0] !== '') {
    console.log(winner)
  } else if (response.game.cells[2] === response.game.cells[4] && response.game.cells[2] === response.game.cells[6] && response.game.cells[2] !== '') {
    console.log(winner)
  }
}

const error = function (error) {
  $('message').text('FailFish ' + error.responseJSON.message)
}

module.exports = {
  createGameSuccess,
  updateSuccess,
  error
}
