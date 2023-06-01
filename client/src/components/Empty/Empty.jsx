import css from "./Empty.module.css";
import emptyWallet from "../../assets/image/empty.png";

const Empty = () => {
  return (
    <>
      <img src={emptyWallet} className={css.img} />
      <h3 className={css.emptyMonth}>Brak transakcji</h3>
    </>
  );
};

export default Empty;
