import React from 'react';
import './Burger.css';
import burger from '../../../images/burger.svg';
import burgerLight from '../../../images/burger-light.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useToggle } from '../../hooks/useToggle';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useRef } from 'react';

export default function Burger({ isLight, onAccountClick }) {
  const refMenu = useRef(null);
  const { value: open, toggle: toggleOpen } = useToggle();
  useOutsideClick(refMenu, toggleOpen);

  document.body.style.overflow = open ? 'hidden' : '';

  return (
    <>
      <button onClick={toggleOpen} className='btn burger' type='button'>
        <img src={isLight ? burger : burgerLight} alt='меню' />
      </button>

      {open && (
        <>
          <BurgerMenu
            onAccountClick={onAccountClick}
            onClose={toggleOpen}
            burgerRef={refMenu}
          />
        </>
      )}
    </>
  );
}
