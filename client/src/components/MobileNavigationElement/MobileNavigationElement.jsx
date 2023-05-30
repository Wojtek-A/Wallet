import css from "./MobileNavigationElement.module.css";
import sprite from "../../assets/icon/sprite.svg";
import { NavLink } from "react-router-dom";

const MobileNavigationElement = ({ handleNavigation }) => {
  return (
    <NavLink
      to={`/${handleNavigation}`}
      className={(navData) => (navData.isActive ? css.active : css.nav)}
    >
      <svg className={css.icon}>
        <use xlinkHref={`${sprite}#${handleNavigation}`} />
      </svg>
    </NavLink>
  );
};

export default MobileNavigationElement;
