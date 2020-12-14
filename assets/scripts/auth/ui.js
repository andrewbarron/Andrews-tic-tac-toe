const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successful! You may sign in now')
  $('form').trigger('reset')
}

// Sign in success :
const signInSuccess = function (response) {
  // "Store" the user (and the token)
  // Create a new key on the `store` object
  // Give that key a value of `response.user`
  store.user = response.user
  // TODO: "change the view"
  $('.unauthenticated').hide()
  $('h1').hide()
  $('.authenticated').show()
  $('#message').text(`Welcome ${store.user.email}!`)
}
const signInFailure = function (data) {
  $('#message').text('Sign in failed. Let\'s try another password?')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password Change Successful')
  $('#change-password').hide()
  $('form').trigger('reset')
}

const error = function (error) {
  $('message').text('Did not work! error: ' + error.responseJSON.message)
}

const signOutSuccess = function () {
  $('#message').text('cya later!')
  $('.unauthenticated').show()
  $('h1').show()
  $('.authenticated').hide()
  store.user = null
  $('form').trigger('reset')
}

const getGamesSuccess = function (response) {
  $('#message').show()
  $('#message').text(`You've played ${response.games.length} games!`)
  $('.authenticated').hide()
  $('#return-btn').show()
}

$('.return').on('click', function () {
  $('#result').hide()
  $('#message').text(`Welcome ${store.user.email}!`)
  $('.authenticated').show()
  $('#return-btn').hide()
})

$(document).ready(function () {
  $('#showpass').click(function () {
    $('#change-password').toggle()
  })
})

module.exports = {
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  signOutSuccess,
  getGamesSuccess,
  error
}
