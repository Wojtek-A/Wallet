import { NavLink } from "react-router-dom";
import style from "./MobileHeader.module.css";
import sprite from "../../assets/icon/spriteToMergeIntoExisting.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsModalLogoutOpen } from "../../redux/global/selectors";
import { changeIsModalLogoutOpen } from "../../redux/global/slice";

export const MobileHeader = () => {
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);
  const dispatch = useDispatch();
  // const handleLogout = () => {
  // dispatch(resetState());
  // };

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
        <button
          className={style.header__logoutButton}
          onClick={() => dispatch(changeIsModalLogoutOpen())}
        >
          <svg className={style.logout__icon}>
            <use href={`${sprite}#icon-logout`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
