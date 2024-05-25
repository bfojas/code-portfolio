import React from 'react';
import { styled } from 'linaria/react'

const StyledComp = styled.div`
  width: 100%;
  height: 50%;
  background-color: blue;

  .test-style {
    width: 50%;
    background-color: red
  }
`
export default function TestComponent() {
  return <StyledComp>This is a component
    <div className='test-style'>yo</div>
  </StyledComp>
}