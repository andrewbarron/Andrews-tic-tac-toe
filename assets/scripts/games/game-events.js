'use strict'
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
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

const handleClick = function (event) {
  const cell = event.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
}

function placeMark (cell, currentClass) {
  cell.classList.add(currentClass)
}

module.exports = {
  onCreateGame,
  handleClick,
  placeMark
}
