import { NavLink } from "react-router-dom";
import style from "./MobileHeader.module.scss";
import sprite from "../../assets/icon/spriteToMergeIntoExisting.svg";

export const MobileHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.header__logo}>
        <NavLink to="/home">
          <svg className={style.logo__svg}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </NavLink>
      </div>
      <div className={style.header__logout}>
        <span className={style.header__logoutUsername}>Paweł</span>
        <button className={style.header__logoutButton}>
          <svg className={style.logout__icon}>
            <use href={`${sprite}#icon-logout`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};