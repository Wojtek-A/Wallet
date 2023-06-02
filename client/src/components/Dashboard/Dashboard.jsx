import Navigation from "../Navigation/Navigation.jsx";
import Currency from "../Currency/Currency.jsx";
import Balance from "../Balance/Balance.jsx";
import TransactionList from "../TransactionList/TransactionList.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../redux/wallet/wallet.thunk.js";
import { selectIsLoading, selectErrorStatus } from "../../redux/selector.js";
import { ButtonAddTransaction } from "../ButtonAddTransactions/ButtonAddTransaction.jsx";

import css from "./Dashboard.module.css";

export const Dashboard = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectErrorStatus);
  const dispatch = useDispatch();

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
