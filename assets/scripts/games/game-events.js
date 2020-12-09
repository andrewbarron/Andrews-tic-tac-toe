'use strict'

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

module.exports = {
  onCreateGame
}
