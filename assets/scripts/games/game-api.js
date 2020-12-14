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

const gameUpdate = function (data, currentClass) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.games._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: data.id,
          value: currentClass
        },
        over: data.over
      }
    }
  })
}

module.exports = {
  createGame,
  gameUpdate
}
