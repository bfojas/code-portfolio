import React from 'react';
import { styled } from 'linaria/react';
import { NavLink } from "react-router-dom";

const NavItemContainer = styled.div`
  padding: 4px 12px;
  margin-left: -1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 125px;

  .nav-logo {
    width: 16px;
    height: 16px;
    margin-top: 4px;
  }
`;

export default function NavItem({dark, to, fileName}) {

  const logoFile = dark ? 'transparent-js' : 'transparent-js-light'
  return (
    <NavLink
      to={to} 
    >
      <NavItemContainer className='nav-item'>
          <img
            src={`${process.env.PUBLIC_URL}/${logoFile}.png` }
            className='nav-logo'
            alt=''
          />
          <span>{`${fileName}.js`}</span>
      </NavItemContainer>
    </NavLink>
  )
}
