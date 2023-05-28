import { useDispatch } from "react-redux";
import style from "./ButtonAddTransactions.module.scss";
import plusBtn from "./../../images/plusBtn.svg";
import { changeIsModalAddTransactionOpen } from "../../redux/global/slice";

export const ButtonAddTransaction = () => {
  const dispatch = useDispatch();

  const openModalAddTransaction = () => {
    dispatch(changeIsModalAddTransactionOpen());
  };

  return (
    <>
      <img
        className={style.button}
        src={plusBtn}
        alt="Add Transaction Button"
        onClick={() => openModalAddTransaction()}
      ></img>
    </>
  );
};
