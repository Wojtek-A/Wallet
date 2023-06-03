import MobileNavigation from "../MobileNavigation/MobileNavigation.jsx";
import { ButtonAddTransaction } from "../ButtonAddTransactions/ButtonAddTransaction.jsx";

import Balance from "../Balance/Balance.jsx";
import css from "./MobileDashboard.module.css";

import MobileTransactionList from "../MobileTransactionList/MobileTransactionList.jsx";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../redux/selector.js";
import Empty from "../Empty/Empty.jsx";

export const MobileHomeDashboard = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <main className={css.mobileDashboardWrapper}>
      <section className={css.navSection}>
        <MobileNavigation />
      </section>
      {!transactions?.length && (
        <>
          <section className={css.balanceSection}>
            <Balance />
          </section>
          <Empty />
        </>
      )}
      {transactions.length && (
        <>
          <section className={css.balanceSection}>
            <Balance />
          </section>

          <section>
            <MobileTransactionList />
          </section>
        </>
      )}
      <>
        <ButtonAddTransaction />
      </>
    </main>
  );
};

export default MobileHomeDashboard;
