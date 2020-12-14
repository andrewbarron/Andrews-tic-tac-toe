'use strict'
const store = require('./../store.js')
// const pickX = 'x'
// const pickCircle = 'circle'

const createGameSuccess = function (data) {
  $('#message').text('Good luck!')
  $('.authenticated').hide()
  $('.letPlay').show()
  $('#result').hide()
  store.games = data.game
  console.log(store.games) // game data is correct
}

const updateSuccess = function (response, currentClass) {
  $('#message').hide()
  $('#turn').show()
  const winner = currentClass + ' wins'
  const draw = 'its a draw'
  const winnerResult = `
  <p>${winner}</p>
  `
  const drawResult = `
  <p>${draw}</p>
  `
  let count = 0
  for (let i = 0; i < response.game.cells.length; i++) {
    if (response.game.cells[i] === 'x') {
      count++
    } else if (response.game.cells[i] === 'circle') {
      count++
    }
  }
  if (count++ === 9) {
    $('.modal-body').html(drawResult)
    $('#result').show()
    $('#turn').hide()
  }
  if (response.game.cells[0] === response.game.cells[1] && response.game.cells[0] === response.game.cells[2] && response.game.cells[0] !== '') {
    $('.modal-body').html(winnerResult)
    $('#result').show()
    $('.letPlay').hide()
    $('#turn').hide()
  } else if (response.game.cells[3] === response.game.cells[4] && response.game.cells[3] === response.game.cells[5] && response.game.cells[3] !== '') {
    $('.modal-body').html(winnerResult)
    $('#result').show()
    $('.letPlay').hide()
    $('#turn').hide()
  } else if (response.game.cells[6] === response.game.cells[7] && response.game.cells[6] === response.game.cells[8] && response.game.cells[6] !== '') {
    $('.modal-body').html(winnerResult)
    $('#result').show()
    $('.letPlay').hide()
    $('#turn').hide()
  } else if (response.game.cells[0] === response.game.cells[3] && response.game.cells[0] === response.game.cells[6] && response.game.cells[0] !== '') {
    $('.modal-body').html(winnerResult)
    $('#result').show()
    $('.letPlay').hide()
    $('#turn').hide()
  } else if (response.game.cells[1] === response.game.cells[4] && response.game.cells[1] === response.game.cells[7] && response.game.cells[1] !== '') {
    $('.modal-body').html(winnerResult)
    $('#result').show()
    $('.letPlay').hide()
    $('#turn').hide()
  } else if (response.game.cells[2] === response.game.cells[5] && response.game.cells[2] === response.game.cells[8] && response.game.cells[2] !== '') {
    $('.modal-body').html(winnerResult)
    $('#result').show()
    $('.letPlay').hide()
    $('#turn').hide()
  } else if (response.game.cells[0] === response.game.cells[4] && response.game.cells[0] === response.game.cells[8] && response.game.cells[0] !== '') {
    $('.modal-body').html(winnerResult)
    $('#result').show()
    $('.letPlay').hide()
    $('#turn').hide()
  } else if (response.game.cells[2] === response.game.cells[4] && response.game.cells[2] === response.game.cells[6] && response.game.cells[2] !== '') {
    $('.modal-body').html(winnerResult)
    $('#result').show()
    $('.letPlay').hide()
    $('#turn').hide()
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
