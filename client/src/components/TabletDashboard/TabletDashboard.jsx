import Navigation from '../Navigation/Navigation.jsx';
import Currency from '../Currency/Currency.jsx';
import Balance from '../Balance/Balance.jsx';
import TransactionList from '../TransactionList/TransactionList.jsx';

import css from './TabletDashboard.module.css';

export const TabletDashboard = () => {
  return (
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
        <TransactionList />
      </section>
    </main>
  );
};

export default TabletDashboard;
