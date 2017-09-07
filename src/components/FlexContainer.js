import React from 'react'
import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: space-between;
`
