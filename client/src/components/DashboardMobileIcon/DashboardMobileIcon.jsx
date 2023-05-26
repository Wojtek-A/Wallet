import css from "./DashboardMobileIcon.module.css";
import sprite from "../../assets/icon/sprite.svg";
import { NavLink } from "react-router-dom";

const DashboardMobileIcon = ({ iconName }) => {
  return (
    <NavLink
      to={`/${iconName}`}
      className={(navData) => (navData.isActive ? css.active : css.link)}
    >
      <svg className={css.icon}>
        <use xlinkHref={`${sprite}#${iconName}`} />
      </svg>
    </NavLink>
  );
};

export default DashboardMobileIcon;
