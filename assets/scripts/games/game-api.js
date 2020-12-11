'use strict'

const store = require('./../store')
const config = require('./../config')

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createNewGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGame = function (updateBox, currentClass) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.games._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: updateBox.id,
          value: currentClass
        },
        over: updateBox.over
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  createNewGame
}
