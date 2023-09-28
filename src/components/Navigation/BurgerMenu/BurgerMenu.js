import React from "react";
import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import close from "../../../images/close.svg";
import ProfileButton from "../ProfileButton/ProfileButton";

export default function BurgerMenu({ onClose }) {
  return (
    <>
      <div className="burger-menu__overlay" />
      <nav className="burger-menu__content">
        <button
          className="btn burger-menu__close-btn"
          onClick={onClose}
          type="button"
        >
          <img src={close} alt="close" />
        </button>
        <ul className="burger-menu__list">
          <li className="burger-menu__list-item">
            <NavLink
              className="link burger-menu__list-link"
              to="/"
              onClick={onClose}
            >
              Главная
            </NavLink>
          </li>
          <li className="burger-menu__list-item">
            <NavLink
              className="link burger-menu__list-link"
              to="/movies"
              onClick={onClose}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__list-item">
            <NavLink
              className="link burger-menu__list-link"
              to="/saved-movies"
              onClick={onClose}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <div className="burger-menu__btn-container">
          <ProfileButton isLight={true} />
        </div>
      </nav>
    </>
  );
}
