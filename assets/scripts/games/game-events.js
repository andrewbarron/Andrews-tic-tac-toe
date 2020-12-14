'use strict'
const pickX = 'x'
const pickCircle = 'circle'
let circleTurn
const cellElements = document.querySelectorAll('[data-cell]')
const api = require('./game-api')
const ui = require('./game-ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onCreateGame = function (event) {
  event.preventDefault()
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(pickX)
    cell.classList.remove(pickCircle)
  })
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.error)
}

const onGameUpdate = function (event) {
  event.preventDefault()
  const data = event.target
  if (data.classList.contains('x')) {
    alert('warning, spot taken')
  } else if (data.classList.contains('circle')) {
    alert('warning, spot taken')
  } else {
    const currentClass = circleTurn ? pickCircle : pickX
    if (currentClass === 'x') {
      $('#turn').text('It is circle\'s turn')
    } else {
      $('#turn').text('It is X\'s turn')
    }
    placeMark(data, currentClass)
    changeTurn()
    api.gameUpdate(data, currentClass)
      .then(data => ui.updateSuccess(data, currentClass))
      .catch(ui.error)
  }
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
