'use strict'
// in order to switch between x & O I will need to update the DOM
const pickX = 'x'
const pickCircle = 'circle'
const currentCell = document.querySelectorAll('.cell')
// winningArrays is all possible combinations of array indexes that define 3 in a row.
const winningArrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
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

const onCreateNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createNewGame(data)
    .then(ui.createNewGameSuccess)
    .catch(ui.error)
}

// handleClick is taking data from .cell & applying my variables set here.
const handleClick = function (event) {
  // store.game.cells = event.target.id
  // console.log(store.target.cells)
  // printing cell shows the array number 0-8 that was clicked.
  const cell = event.target
  console.log(cell)
  // currentClass will switch between X & circle & apply the CSS for each respective
  const currentClass = circleTurn ? pickCircle : pickX
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    console.log('winner')
  }
  changeTurn()
  // Since currentclass prints the current turn, I have to print the opposite.
  if (currentClass === 'circle') {
    $('#turn').text('It is X\'s turn')
  } else {
    $('#turn').text('It is circle\'s turn')
  }
}

function placeMark (cell, currentClass) {
  cell.classList.add(currentClass)
}
// Since nothing is changing the placeMark function, changeTurn will switch
// X and circle.
function changeTurn () {
  circleTurn = !circleTurn
}

function checkWin (currentClass) {
  return winningArrays.some(combination => {
    return combination.every(index => {
      return currentCell[index].classList.contains(currentClass)
    })
  })
}

const onGameUpdate = function (event) {
  event.preventDefault()
  const updateBox = event.target
  const currentClass = circleTurn ? pickX : pickCircle
  if (checkWin(currentClass)) {
    updateBox.over = true
  }
  api.updateGame(updateBox, currentClass)
    .then(ui.updateGameSuccessful)
    .catch(ui.error)
}
module.exports = {
  onCreateGame,
  handleClick,
  placeMark,
  changeTurn,
  checkWin,
  onGameUpdate,
  onCreateNewGame
}
