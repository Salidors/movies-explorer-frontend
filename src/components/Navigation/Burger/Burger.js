import React from "react";
import "./Burger.css";
import burger from "../../../images/burger.svg";
import burgerLight from "../../../images/burger-light.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useToggle } from "../../hooks/useToggle";

export default function Burger({ isLight, onAccountClick }) {
  const { value: open, toggle: toggleOpen } = useToggle();

  document.body.style.overflow = open ? "hidden" : "";
  return (
    <>
      <button onClick={toggleOpen} className="btn burger" type="button">
        <img src={isLight ? burger : burgerLight} alt="burger" />
      </button>

      {open && (
        <>
          <BurgerMenu onAccountClick={onAccountClick} onClose={toggleOpen} />
        </>
      )}
    </>
  );
}
