import React from 'react';
import { styled } from 'linaria/react';
import { NavLink } from "react-router-dom";

const NavItemContainer = styled.div`
  padding: 4px 12px;
  border: 1px solid rgb(40, 44, 52);
  margin-left: -1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 125px;
`;

export default function NavItem({to, fileName}) {

  return (
    <NavLink
      to={to} 
    >
      <NavItemContainer>
          <img
            src='/js-image.png'
            className='nav-logo'
            alt=''
          />
          <img
            src='/js-active.png'
            className='nav-logo-active'
            alt=''
          />
          <span>{`${fileName}.js`}</span>
      </NavItemContainer>
    </NavLink>
  )
}