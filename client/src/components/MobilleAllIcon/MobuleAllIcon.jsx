import DashboardMobileIcon from "../../components/DashboardMobileIcon/DashboardMobileIcon.jsx";
import { DASHBOARD_STATUS } from "../../redux/constant.js";
import clsx from "clsx";
import css from "./MobileAllIcon.module.css";

const MobileAllIcon = () => {
  return (
    <>
      <div className={clsx([css.container], [css.iconWrapper])}>
        <DashboardMobileIcon iconName={DASHBOARD_STATUS.HOME} />
        <DashboardMobileIcon iconName={DASHBOARD_STATUS.STATISTIC} />
        <DashboardMobileIcon iconName={DASHBOARD_STATUS.MONEY} />
      </div>
    </>
  );
};

export default MobileAllIcon;
