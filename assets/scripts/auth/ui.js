const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successful!')
}

// Sign in success :
const signInSuccess = function (response) {
  $('#message').text('Sign In Success! Welcome :)')
  console.log(store)
  // "Store" the user (and the token)
  // Create a new key on the `store` object
  // Give that key a value of `response.user`
  store.user = response.user
  console.log(store)
  // TODO: "change the view"
  $('.unauthenticated').hide()
  // show the authenticated options
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
  // show the authenticated options
  $('.authenticated').hide()
  store.user = null
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  error
}
