'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const gameEvents = require('./games/game-events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#return-btn').hide()
  $('.authenticated').hide()
  $('#change-password').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-game').on('click', gameEvents.onCreateGame)
  $('.cell').on('click', gameEvents.onGameUpdate)
  $('#restart-game').on('click', gameEvents.onCreateGame)
  $('#get-games').on('click', authEvents.onGetGames)
})
