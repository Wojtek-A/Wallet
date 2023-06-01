import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import sprite from "../../assets/icon/spriteToMergeIntoExisting.svg";
import { logOut } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());
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
        <button className={style.header__logoutButton} onClick={handleLogOut}>
          <svg className={style.logout__icon}>
            <use href={`${sprite}#icon-logout`}></use>
          </svg>
          <span className={style.logout__caption}>Exit</span>
        </button>
      </div>
    </div>
  );
};
