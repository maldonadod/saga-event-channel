import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  START_APP
  ,SET_USER
} from './actions'

import ChatApp from './chat/ChatApp'
import {
  FlexContainer
} from './components/FlexContainer'

class App extends Component {

  constructor(props) {
    super(props)
    this.username = null
  }

  componentDidMount() {
    this.props.start()
  }

  setUsername = e => {
    this.username = e.target.value
  }

  enter = () => {
    const {setUser} = this.props

    if (this.username === null) {
      return alert('First enter a username')
    }
    setUser({
      username: this.username
    })
  }

  render() {
    const {posts,user} = this.props

    if (!user) {
      return (
        <section>
          <div>
            <input
              onChange={this.setUsername}
              type="text" />
            <button
              onClick={this.enter}
              type="button">Enter</button>
          </div>
        </section>
      )
    }

    return (
      <ChatApp
        messages={posts}
        user={user} />
    )
  }
}

const mapToState = state => ({
  posts: state.posts
  ,user: state.user
})

const mapToDispatch = dispatch => ({
  start: () => dispatch({
    type: START_APP
  })
  ,setUser: user => dispatch({
    type: SET_USER
    ,user
  })
})

export default connect(mapToState,mapToDispatch)(App)
