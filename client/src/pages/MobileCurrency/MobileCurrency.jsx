import MobileAllIcon from "../../components/MobilleAllIcon/MobuleAllIcon.jsx";
import css from "./MobileCurrency.module.css";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions/ButtonAddTransactions.jsx";

const MobileCurrency = () => {
  return (
    <>
      <section className={css.iconSection}>
        <MobileAllIcon />
      </section>
      <ButtonAddTransactions />
    </>
  );
};

export default MobileCurrency;
