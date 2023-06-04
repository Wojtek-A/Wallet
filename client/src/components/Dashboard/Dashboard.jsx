import Navigation from "../Navigation/Navigation.jsx";
import Currency from "../Currency/Currency.jsx";
import Balance from "../Balance/Balance.jsx";
import TransactionList from "../TransactionList/TransactionList.jsx";

import { ButtonAddTransaction } from "../ButtonAddTransactions/ButtonAddTransaction.jsx";

import css from "./Dashboard.module.css";

export const Dashboard = () => {
  return (
    <>
      <main className={css.dashboardWrapper}>
        <div className={css.leftWrapper}>
          <section className={css.navSection}>
            <Navigation />
          </section>
          <section className={css.balanceSection}>
            <Balance />
          </section>
          <section className={css.currencySection}>
            <Currency />
          </section>
        </div>
        <section className={css.transactionListSection}>
          <TransactionList />
        </section>
        <ButtonAddTransaction />
      </main>
    </>
  );
};

export default Dashboard;
