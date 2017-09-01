import {all,fork} from 'redux-saga/effects'
import {flow} from './posts'

export default function *root() {
  yield fork(flow)
}
