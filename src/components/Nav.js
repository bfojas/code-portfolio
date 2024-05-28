import React from 'react';
import { styled } from 'linaria/react';
import NavItem from '@components/NavItem';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(24, 24, 24);
  position: sticky;
  top: 0;
  user-select: none;

  a {
    color: rgb(170, 170, 170);
    text-decoration: none;

    .nav-logo-active {
      display: none;
    }

    span {
      margin-left: 4px;
    }
  }

  a.active {
    background-color: rgb(40, 44, 52);
    color: white;
    .nav-logo {
      display: none;
    }
    .nav-logo-active {
      display: unset;
    }
  }
`;

export default function Nav() {

  return (
    <NavContainer>
      <NavItem to='/' fileName='index' />
      <NavItem to='/experience' fileName='experience' />
    </NavContainer>
  )
}