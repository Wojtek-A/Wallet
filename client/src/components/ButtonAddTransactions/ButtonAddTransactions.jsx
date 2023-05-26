import style from "./ButtonAddTransactions.module.scss";
import plusBtn from "./../../images/plusBtn.svg";

export const ButtonAddTransactions = () => {
  return (
    <>
      <img
        className={style.button}
        src={plusBtn}
        alt="Add Transaction Button"
      ></img>
    </>
  );
};
