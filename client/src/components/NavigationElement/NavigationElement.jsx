import css from './NavigationElement.module.css';
import sprite from '../../assets/icon/sprite.svg';
import { NavLink } from 'react-router-dom';

const NavigationElement = ({ handleNavigation }) => {
  return (
    <NavLink
      to={`/${handleNavigation}`}
      className={(navData) => (navData.isActive ? css.active : css.nav)}
    >
      <svg className={css.icon}>
        <use xlinkHref={`${sprite}#${handleNavigation}`} />
      </svg>
      <p>
        {handleNavigation.charAt(0).toUpperCase() + handleNavigation.slice(1)}
      </p>
    </NavLink>
  );
};

export default NavigationElement;
