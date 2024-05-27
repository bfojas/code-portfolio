import React from 'react';
import { styled } from 'linaria/react';
import Nav from '@components/Nav';
import Router from '@components/Router'

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  
  pre {
    margin: 0;
  }

  .multi-line {
    display: flex;
    flex-direction: row;

    a {
      word-break: break-word;
    }
  }

  .multi-line-tab {
    white-space: pre;
  }

  .line-punctuation {
    color: white;
  }

  .obj-key-line {
    color: rgb(91, 133, 201) !important;
  }

  .react-syntax-highlighter-line-number {
    min-width: 2.25em !important;
    border-right: 1px solid grey;
    padding-right: .5em !important;
    margin-right: .5em;
  }
`

export default function PageLayout() {
  return(
    <LayoutContainer>
      <Nav />
      <div>
        <Router />
      </div>
    </LayoutContainer>
  )
}