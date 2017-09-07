import {
  SET_USER
} from '../actions'

export default function user(state = null, {type,user}) {

  switch (type) {
    case SET_USER:
        return {...user}
      break;
    default:
      return state
  }
}
