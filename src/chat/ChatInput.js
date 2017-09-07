import React, {Component} from 'react'
import ChatInput from './static/ChatInput'
import {connect} from 'react-redux'

import {
  PUSH_MESSAGE_REQUEST
} from '../actions'

class ChatInputContainer extends Component {

  constructor(props) {
    super(props)
  }

  onKeyDown = e => {
    if (e.keyCode == 13) {
      this.props.pushMessage({
        message: e.target.value,
        user: this.props.user
      })
    }
  }

  render() {
    return (
      <ChatInput onKeyDown={this.onKeyDown} />
    )
  }
}

const mapToDispatch = dispatch => ({
  pushMessage: message => dispatch({
    type: PUSH_MESSAGE_REQUEST,
    message
  })
})

export default connect(null, mapToDispatch)(ChatInputContainer)
