import {
  SET_POSTS
} from '../actions'

export default function posts(state = [], {type,posts}) {
  switch (type) {
    case SET_POSTS:
      return [...posts]
      break;
    default:
      return state
  }
}
