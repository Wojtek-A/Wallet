import { useSelector } from "react-redux";

import MobileNavigation from "../MobileNavigation/MobileNavigation.jsx";
// import Navigation from '../Navigation/Navigation.jsx';

import Balance from "../Balance/Balance.jsx";
import css from "./MobileDashboard.module.css";

import MobileTransactionList from "../MobileTransactionList/MobileTransactionList.jsx";

import { ButtonAddTransaction } from "../ButtonAddTransactions/ButtonAddTransaction.jsx";
import { selectIsModalAddTransactionOpen } from "../../redux/global/selectors.js";
import { ModalAddTransaction } from "../ModalAddTransaction/ModalAddTransaction.jsx";

export const MobileHomeDashboard = () => {
  const isModalAddTransactionOpened = useSelector(
    selectIsModalAddTransactionOpen
  );

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
        <ButtonAddTransaction />
      </section>

      {isModalAddTransactionOpened && <ModalAddTransaction />}
    </main>
  );
};

export default MobileHomeDashboard;
