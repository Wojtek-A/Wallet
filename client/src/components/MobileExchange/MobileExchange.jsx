import Currency from "..//Currency/Currency.jsx";
import MobileNavigation from "../MobileNavigation/MobileNavigation.jsx";
import css from "./MobileExchange.module.css";

const MobileExchange = () => {
  return (
    <>
      <section className={css.navSection}>
        <MobileNavigation />
      </section>
      <section>
        <Currency />
      </section>
    </>
  );
};

export default MobileExchange;
