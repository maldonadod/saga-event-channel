import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  padding: 10px;
  position: fixed;
  bottom: 0;
`

const Input = styled.input`
`

const ChatInput = ({onKeyDown}) => {
  return (
    <InputContainer>
      <Input
        onKeyDown={onKeyDown}
        type="text" />
    </InputContainer>
  )
}

export default ChatInput
