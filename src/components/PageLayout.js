import React from 'react';
import { styled } from 'linaria/react';

import Nav from '@components/Nav';
import Router from '@components/Router';
import useTheme from '@utils/useTheme';
import * as themeConstants from '@utils/themeConstants'

const LayoutContainer = styled.div`
  :global() {
    body.theme-dark {
      background-color: ${themeConstants.dark.body} !important;
    }

    body.theme-light {
      background-color: ${themeConstants.light.body} !important;
    }
  }

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

  .maintain-space {
    min-width: 17.59px;
  }

  .react-syntax-highlighter-line-number {
    min-width: 2.25em !important;
    border-right: 1px solid grey;
    padding-right: .5em !important;
    margin-right: .5em;
  }
`

export default function PageLayout() {
  const [dark, setDark] = useTheme();

  return(
    <LayoutContainer className={ dark ? 'theme-dark' : 'theme-light' }>
      <Nav dark={ dark } setDark={ setDark } />
      <div>
        <Router dark={ dark }/>
      </div>
    </LayoutContainer>
  )
}
