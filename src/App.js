import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  START_APP
} from './actions'

const Container = ({children}) => (
  <section>{children}</section>
)

class App extends Component {

  constructor(props) {
    super(props)
    this.renderPost = this.renderPost.bind(this)
  }

  componentDidMount() {
    this.props.start()
  }

  renderPost(post,i) {
    return (
      <section key={i}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </section>
    )
  }

  render() {
    const {posts} = this.props
    return (
      <Container>
        <h1>The Posts</h1>
        {
          posts.map(this.renderPost)
        }
      </Container>
    )
  }
}

const mapToState = state => ({
  posts: state.posts
})

const mapToDispatch = dispatch => ({
  start: () => dispatch({
    type: START_APP
  })
})

export default connect(mapToState,mapToDispatch)(App)
