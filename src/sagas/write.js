import {channel} from 'redux-saga'
import {take,call,put,fork} from 'redux-saga/effects'
import {
  PUSH_MESSAGE_REQUEST
} from '../actions'

export function* write(socket) {

  while (true) {

    const {message} = yield take(PUSH_MESSAGE_REQUEST)

    socket.emit('push:message', message)
  }
}
