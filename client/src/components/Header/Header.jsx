import { NavLink } from "react-router-dom";
// import { Media } from "react-media";
import style from "./Header.module.scss";
import sprite from "../../assets/icon/sprite.svg";

export const Header = () => {
  return (
    // <Media queries={breakepoints}>
    //   {(matches) => (

    <div className={style.header}>
      <div className={style.header__logo}>
        <NavLink to="/home">
          <svg className={style.logo__svg}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
        </NavLink>
      </div>
      {/* {matches.mobile && ( */}
      <div className={style.header__logout}>
        <span className={style.header__logoutUsername}>Paweł</span>
        <button className={style.header__logoutButton}>
          <svg className={style.logout__icon}>
            <use href={`${sprite}#icon-logout`}></use>
          </svg>
        </button>
      </div>

      {/* )} */}
      {/* {(matches.desktop || matches.tablet) && ( */}
      {/* <div className={style.header__logout}>
              <div></div>
              <button></button>
            </div> */}
      {/* )} */}
    </div>
    // )}
    // </Media>
    //   <ModalLogout
    //     isOpen={isModalLogoutOpen}
    //     onClose={handleCloseModalLogout}
    //     onLogout={handleLogout}
    //   />
  );
};
