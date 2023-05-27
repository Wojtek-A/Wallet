import DashboardMobileIcon from "../../components/DashboardMobileIcon/DashboardMobileIcon.jsx";
import { DASHBOARD_STATUS } from "../../redux/constant.js";
import Balance from "../../components/Balance/Balance.jsx";
import clsx from "clsx";
import css from "./MobileHome.module.css";
import { MobileTransactionList } from "../../components/MobileTransactionList/MobileTransactionList.jsx";
import MobileAllIcon from "../../components/MobilleAllIcon/MobuleAllIcon.jsx";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions/ButtonAddTransactions.jsx";

const MobileHome = () => {
  return (
    <>
      <section className={css.iconSection}>
        <MobileAllIcon />
      </section>
      <section className={css.balanceSection}>
        <div className={css.container}>
          <Balance />
        </div>
      </section>

      <section>
        <div className={css.container}>
          <MobileTransactionList />
        </div>
      </section>
      <ButtonAddTransactions />
    </>
  );
};

export default MobileHome;
