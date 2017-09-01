import {take,put,call,fork} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import {
  START_APP
  ,SET_POSTS
  ,setPosts
} from '../actions'

function connect() {
  const socket = io('http://localhost:8900/');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

export function* subscribe(socket) {
  return new eventChannel(emit => {
    const update = posts => emit(setPosts(posts))
    socket.on('wall:update', update)
    return () => {}
  })
}

export function* flow() {
  yield take(START_APP)
  const socket = yield call(connect)
  yield fork(read, socket)
}
