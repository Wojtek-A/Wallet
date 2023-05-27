import MobileNavigationElement from "../MobileNavigationElement/MobileNavigationElement.jsx";
import { DASHBOARD_NAVIGATION } from "../../redux/constant.js";
import clsx from "clsx";
import css from "./MobileNavigation.module.css";

const MobileNavigation = () => {
  return (
    <>
      <div className={clsx([css.container], [css.navWrapper])}>
        <MobileNavigationElement handleNavigation={DASHBOARD_NAVIGATION.HOME} />
        <MobileNavigationElement
          handleNavigation={DASHBOARD_NAVIGATION.STATISTIC}
        />
        <MobileNavigationElement
          handleNavigation={DASHBOARD_NAVIGATION.CURRENCY}
        />
      </div>
    </>
  );
};

export default MobileNavigation;
