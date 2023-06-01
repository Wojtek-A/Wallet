import { useDispatch, useSelector } from "react-redux";
import Media from "react-media";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import sprite from "../../assets/icon/spriteToMergeIntoExisting.svg";
import { changeIsModalLogoutOpen } from "../../redux/global/slice";
import { selectIsModalLogoutOpen } from "../../redux/global/selectors";

export const Header = (props) => {
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);
  const dispatch = useDispatch();

  return (
    <>
      <header className={style.header__container}>
        <div className={style.header}>
          <div className={style.header__logo}>
            <NavLink to="/home">
              <svg className={style.logo__svg}>
                <use href={`${sprite}#icon-logo`}></use>
              </svg>
            </NavLink>
          </div>
          <Media
            queries={{
              mobile: "(max-width: 767px)",
              tablet: "(min-width: 768px) and (max-width: 1199px)",
              desktop: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <>
                {matches.mobile && (
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
                )}
                {(matches.tablet || matches.desktop) && (
                  <div className={style.header__logout}>
                    <span className={style.header__logoutUsername}>Paweł</span>
                    <button
                      className={style.header__logoutButton}
                      onClick={() => dispatch(changeIsModalLogoutOpen())}
                    >
                      <svg className={style.logout__icon}>
                        <use href={`${sprite}#icon-logout`}></use>
                      </svg>
                      <span className={style.logout__caption}>Exit</span>
                    </button>
                  </div>
                )}
              </>
            )}
          </Media>
        </div>
      </header>
      {props.children}
    </>
  );
};
