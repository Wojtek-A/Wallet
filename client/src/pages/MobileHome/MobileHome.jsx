import { useSelector } from "react-redux";
// import clsx from "clsx";

import { selectIsModalAddTransactionOpen } from "../../redux/global/selectors.js";
// import DashboardMobileIcon from "../../components/DashboardMobileIcon/DashboardMobileIcon.jsx";
// import { DASHBOARD_STATUS } from "../../redux/constant.js";
import Balance from "../../components/Balance/Balance.jsx";
import css from "./MobileHome.module.css";
import { MobileTransactionList } from "../../components/MobileTransactionList/MobileTransactionList.jsx";
import MobileAllIcon from "../../components/MobilleAllIcon/MobuleAllIcon.jsx";
import { ButtonAddTransaction } from "../../components/ButtonAddTransactions/ButtonAddTransactions.jsx";
import { ModalAddTransaction } from "../../components/ModalAddTransaction/ModalAddTransaction.jsx";

const MobileHome = () => {
  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );

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

      <ButtonAddTransaction />

      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </>
  );
};

export default MobileHome;
