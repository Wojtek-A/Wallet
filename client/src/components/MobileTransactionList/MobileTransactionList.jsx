import { useSelector } from "react-redux";
import { selectTransaction } from "../../redux/selector";
import css from "./MobileTransactionList.module.css";
import clsx from "clsx";
import sprite from "../../assets/icon/sprite.svg";
export const MobileTransactionList = () => {
  const transactions = useSelector(selectTransaction);

  return (
    <>
      {transactions.map((transaction, index) => (
        <ul
          key={index + 10000}
          className={clsx(css.transactionGrid, {
            [css.income]: transaction.Type === "+",
            [css.expense]: transaction.Type === "-",
          })}
        >
          {Object.keys(transaction).map((keyObj, index) => (
            <li className={css.transactionItem} key={index}>
              <p className={css.title}>{keyObj}</p>
              <p
                className={clsx(css.text, {
                  [css.plus]: transaction.Type === "+" && keyObj === "Sum",
                  [css.minus]: transaction.Type === "-" && keyObj === "Sum",
                })}
              >
                {transaction[keyObj]}
              </p>
            </li>
          ))}
          <li className={css.transactionItem}>
            <button className={css.btn}>Delete</button>
            <div className={css.wrapper}>
              <svg className={css.icon}>
                <use xlinkHref={`${sprite}#pen`}></use>
              </svg>
              <p className={css.text}>Edit</p>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
};
