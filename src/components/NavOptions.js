import React, { useState, useEffect, useRef } from 'react';
import { styled } from 'linaria/react';

const NavOptionButton = styled.div`
  position: absolute;
  top: 3px;
  right: 6px;
  letter-spacing: 2px;
  font-weight: bold;
  cursor: pointer;
  height: 24px;
  width: 24px;
  border-radius: 3px;

  > div {
    padding: 5px 3px;
    line-height: 4px;
    width: 100%;
    height: 100%;
  }
`;

const NavOptionItem = styled.div`
  position: absolute;
  top: 29px;
  right: 0;
  height: 28px;
  padding: 4px 16px;
  line-height: 26px;
  cursor: pointer;
`;

export default function NavOptions({dark, setDark}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
          menuRef.current
          && !menuRef.current.contains(e.target)
          && e.target !== buttonRef.current
        ) {
        open && setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <>
    <NavOptionButton className='nav-option-button'>
      <div
        onClick={() => setOpen(!open)}
        ref={buttonRef}
      >
        ...
      </div>
    </NavOptionButton>
    {
        open && (
          <NavOptionItem
            ref={menuRef}
            onClick={() => {
              setDark(!dark);
              setOpen(false)
            }}
            className='nav-option-item'
          >
            {`Use ${dark ? 'light' : 'dark'} theme`}
          </NavOptionItem>
        )
      }
    </>
  )

}
