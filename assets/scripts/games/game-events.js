'use strict'
const pickX = 'x'
const pickCircle = 'circle'

// const winningArrays = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]
let circleTurn
const api = require('./game-api')
const ui = require('./game-ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.error)
}

const onGameUpdate = function (event) {
  event.preventDefault()
  const data = event.target
  // console.log(data) // <div class="cell x" id="0"
  const currentClass = circleTurn ? pickCircle : pickX
  if (currentClass === 'circle') {
    $('#turn').text('It is X\'s turn')
  } else {
    $('#turn').text('It is circle\'s turn')
  }
  placeMark(data, currentClass)
  changeTurn()
  // if (checkWin(currentClass)) {
  //   endGame(false)
  // }
  api.gameUpdate(data, currentClass)
    .then(ui.updateSuccess)
    .catch(ui.error)
}

function placeMark (data, currentClass) {
  data.classList.add(currentClass)
}
function changeTurn () {
  circleTurn = !circleTurn
}

module.exports = {
  onCreateGame,
  onGameUpdate,
  placeMark,
  changeTurn
}
