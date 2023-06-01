import MobileNavigation from "../MobileNavigation/MobileNavigation.jsx";
import { ButtonAddTransaction } from "../ButtonAddTransactions/ButtonAddTransaction.jsx";

import Balance from "../Balance/Balance.jsx";
import css from "./MobileDashboard.module.css";

import MobileTransactionList from "../MobileTransactionList/MobileTransactionList.jsx";

export const MobileHomeDashboard = () => {
  return (
    <main className={css.mobileDashboardWrapper}>
      <section className={css.navSection}>
        <MobileNavigation />
      </section>
      <section className={css.balanceSection}>
        <Balance />
      </section>
      <section>
        <MobileTransactionList />
      </section>
      <ButtonAddTransaction />
    </main>
  );
};

export default MobileHomeDashboard;
