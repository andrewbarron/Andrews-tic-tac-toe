const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successful! You may sign in now')
  $('form').trigger('reset')
}

// Sign in success :
const signInSuccess = function (response) {
  $('#message').text('Sign In Success! Welcome :)')
  // "Store" the user (and the token)
  // Create a new key on the `store` object
  // Give that key a value of `response.user`
  store.user = response.user
  // TODO: "change the view"
  $('.unauthenticated').hide()
  $('h1').hide()
  $('.authenticated').show()
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success! :)')
  $('form').trigger('reset')
}

const error = function (error) {
  $('message').text('Did not work! error: ' + error.responseJSON.message)
}

const signOutSuccess = function () {
  $('#message').text('cya later!')

  // TODO: "change the view"
  $('.unauthenticated').show()
  $('h1').show()
  $('.authenticated').hide()
  store.user = null
  $('form').trigger('reset')
}

const getGamesSuccess = function (response) {
  $('#message').text('Nice!')
  console.log(response)
}

$('#return').on('click', function () {
  $('#result').hide()
  $('.authenticated').show()
})

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  getGamesSuccess,
  error
}
