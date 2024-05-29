import React from 'react';
import { styled } from 'linaria/react';
import NavItem from '@components/NavItem';
import NavOptions from '@components/NavOptions';
import * as themeConstants from '@utils/themeConstants'

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  user-select: none;
  height: 30px;

  a {
    text-decoration: none;
    cursor: pointer;

    span {
      margin-left: 4px;
    }
  }

  &.nav-dark {
    background-color: ${themeConstants.dark.alt};

    a {
      border-left: 1px solid ${themeConstants.dark.body};
      border-right: 1px solid ${themeConstants.dark.body};
      color: ${themeConstants.dark.navFont};
    }

    a.active {
      border-top: 1px solid blue;
      background-color: ${themeConstants.dark.body};
      color: white;
    }

    .nav-option-button {
      color: white;
      &:hover {
        background-color: ${themeConstants.dark.body}
      }
    }

    .nav-option-item {
      color: white;
      border: 1px solid ${themeConstants.dark.navFont};
      background-color: ${themeConstants.dark.body};
      &:hover {
        background-color: rgb(91, 133, 201);
      }
    }
  }

  &.nav-light {
    background-color: ${themeConstants.light.alt};

    a {
      border-left: 1px solid ${themeConstants.light.body};
      border-right: 1px solid ${themeConstants.light.body};
      background-color: ${themeConstants.light.alt};
      color: ${themeConstants.light.navFont};
    }

    a.active {
      background-color: ${themeConstants.light.body};
      color: black;
    }

    .nav-option-button {
      color: black;
      &:hover {
        background-color: ${themeConstants.light.body}
      }
    }

    .nav-option-item {
      color: black;
      border: 1px solid ${themeConstants.light.navFont};
      background-color: ${themeConstants.light.body};
      &:hover {
        background-color: rgb(91, 133, 201);
      }
    }
  }
`;

export default function Nav(props) {
  const { dark } = props;

  return (
    <NavContainer className={ dark ? 'nav-dark' : 'nav-light'}>
      <NavItem {...props} to='/' fileName='index' />
      <NavItem {...props} to='/experience' fileName='experience' />
      <NavOptions {...props} />
    </NavContainer>
  )
}
