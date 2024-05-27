import React from 'react';
import { styled } from 'linaria/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import useData from '@utils/useData'
import CodeRender from './CodeRender';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  
  pre {
    margin: 0;
  }

  .multi-line {
    display: flex;
    flex-direction: row;
  }

  .multi-line-tab {
    white-space: pre;
  }

  .react-syntax-highlighter-line-number {
    min-width: 2.25em !important;
    border-right: 1px solid grey;
    padding-right: .5em !important;
    margin-right: .5em;
  }
`

export default function PageLayout({children}) {
  const text = useData('code');

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CodeRender text={text}/>,
    },
  ]);
  return(
    <LayoutContainer>
      <RouterProvider router={router} />
    </LayoutContainer>
  )
}