import { useDispatch, useSelector } from "react-redux";
import { selectTransactions } from "../../redux/selector";
import css from "./MobileTransactionList.module.css";
import clsx from "clsx";
import sprite from "../../assets/icon/sprite.svg";
import { deleteTransaction } from "../../redux/wallet/wallet.thunk";
import {
  changeIsModalEditTrasactionOpen,
  setTransactionToEdit,
} from "../../redux/global/slice";

const MobileTransactionList = () => {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteTransaction(event.target.dataset.id));
  };

  const handleOpenEditModal = (data) => {
    dispatch(setTransactionToEdit(data));
    dispatch(changeIsModalEditTrasactionOpen());
  };

  return (
    <div className={clsx(css.container, css.transactionContainer)}>
      {transactions.map((transaction, index) => (
        <ul
          key={index}
          className={clsx(css.transactionGrid, {
            [css.income]: transaction.type,
            [css.expense]: !transaction.type,
          })}
        >
          {Object.keys(transaction).map((keyObj, index) => {
            const condition =
              keyObj === "__v" ||
              keyObj === "month" ||
              keyObj === "year" ||
              keyObj === "_id" ||
              keyObj === "owner";
            if (condition) return;
            return (
              <li className={css.transactionItem} key={index}>
                <p className={css.title}>{keyObj}</p>
                <p
                  className={clsx(css.text, {
                    [css.plus]: transaction.type && keyObj === "amount",
                    [css.minus]: !transaction.type && keyObj === "amount",
                  })}
                >
                  {keyObj !== "date" && transaction[keyObj]}
                  {keyObj === "date" &&
                    new Date(transaction[keyObj]).toLocaleDateString()}
                  {keyObj === "type" && transaction[keyObj] && "+"}
                  {keyObj === "type" && !transaction[keyObj] && "+"}
                </p>
              </li>
            );
          })}
          <li className={css.transactionItem}>
            <button
              className={css.btn}
              data-id={transaction._id}
              onClick={handleDelete}
            >
              Delete
            </button>
            <div
              className={css.wrapper}
              onClick={() => handleOpenEditModal(transaction)}
            >
              <svg className={css.icon}>
                <use xlinkHref={`${sprite}#pen`}></use>
              </svg>
              <p className={css.text}>Edit</p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MobileTransactionList;
