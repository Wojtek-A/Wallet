import css from "./Balance.module.css";

const Balance = () => {
  return (
    <div className={css.balanceWrapper}>
      <p className={css.title}>YOUR BALANCE</p>
      <p className={css.text}> $24 000.00</p>
    </div>
  );
};

export default Balance;
