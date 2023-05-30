import Navigation from "../Navigation/Navigation.jsx";
import Currency from "../Currency/Currency.jsx";
import Balance from "../Balance/Balance.jsx";
import MobileTransactionList from "../MobileTransactionList/MobileTransactionList.jsx";
import { Header } from "../Header/Header.jsx";

import css from "./TabletDashboard.module.css";

export const TabletDashboard = () => {
  return (
    <>
      <Header />
      <main className={css.dashboardWrapper}>
        <section className={css.navSection}>
          <Navigation />
        </section>
        <section className={css.currencySection}>
          <Currency />
        </section>
        <section className={css.balanceSection}>
          <Balance />
        </section>
        <section className={css.transactionListSection}>
          <MobileTransactionList />
        </section>
      </main>
    </>
  );
};

export default TabletDashboard;
