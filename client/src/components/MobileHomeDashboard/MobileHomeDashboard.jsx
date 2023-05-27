import MobileNavigation from "../MobileNavigation/MobileNavigation.jsx";
import Balance from "../Balance/Balance.jsx";
import css from "./MobileHomeDashboard.module.css";
import MobileTransactionList from "../MobileTransactionList/MobileTransactionList.jsx";

export const MobileHomeDashboard = () => {
  return (
    <>
      <section className={css.navSection}>
        <MobileNavigation />
      </section>
      <section className={css.balanceSection}>
        <Balance />
      </section>

      <section>
        <MobileTransactionList />
      </section>
    </>
  );
};

export default MobileHomeDashboard;
