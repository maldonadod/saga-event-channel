import React, {Component} from 'react'
import ChatInput from './ChatInput'
import styled from 'styled-components'
import {
  FlexContainer
} from '../components/FlexContainer'

const UserMessage = ({className,children}) => (
  <div className={className}>
    {children}
  </div>
)

const StyledUserMessage = styled(UserMessage)`
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
`

const MessageAuthor = styled.p`
`

const Message = styled.p`
`

const Messages = ({messages,user}) => (
  <div>
    {messages.map((message,i) => (
      <StyledUserMessage key={i}>
        <Message>{message.message}</Message>
        <MessageAuthor>{message.user.username}</MessageAuthor>
      </StyledUserMessage>
    ))}
  </div>
)

class ChatApp extends Component {
  render () {
    const {user,messages} = this.props
    return (
      <FlexContainer>
        <Messages messages={messages} user={user} />
        <ChatInput user={user} />
      </FlexContainer>
    )
  }
}

export default ChatApp
