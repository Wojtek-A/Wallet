import NavigationElement from '../NavigationElement/NavigationElement.jsx';
import { DASHBOARD_NAVIGATION } from '../../redux/constant.js';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <div className={clsx([css.container], [css.navWrapper])}>
        <NavigationElement handleNavigation={DASHBOARD_NAVIGATION.HOME} />
        <NavigationElement handleNavigation={DASHBOARD_NAVIGATION.STATISTIC} />
      </div>
    </>
  );
};

export default Navigation;
