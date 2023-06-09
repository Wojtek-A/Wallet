import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectTransactions } from "../../redux/selector";
import {
  changeIsModalEditTrasactionOpen,
  setTransactionToEdit,
} from "../../redux/global/slice";
import {
  deleteTransaction,
  fetchTransactions,
} from "../../redux/wallet/wallet.thunk";

import css from "./TransactionList.module.css";
import clsx from "clsx";
import sprite from "../../assets/icon/sprite.svg";
import Loader from "../Loader/Loader";
import Empty from "../Empty/Empty";

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const openModalEditTransaction = (data) => {
    dispatch(setTransactionToEdit(data));
    dispatch(changeIsModalEditTrasactionOpen());
  };

  return (
    <>
      <div className={css.container}>
        {!isLoading && transactions.length === 0 ? (
          <Empty />
        ) : (
          <table className={css.transactionTable}>
            <thead className={css.tableHead}>
              <tr>
                <th className={css.tableHeader}>Date</th>
                <th className={css.tableHeader}>Type</th>
                <th className={css.tableHeader}>Category</th>
                <th className={css.tableHeader}>Comment</th>
                <th className={css.tableHeader}>Sum</th>
                <th></th>
              </tr>
            </thead>
            {isLoading ? (
              <tbody>
                <tr>
                  <td>
                    <div
                      style={{
                        position: "absolute",
                        width: 200,
                        marginLeft: 200,
                      }}
                    >
                      <Loader variant={"wallet"} scale={0.5} />
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className={css.tableData}>
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className={css.tableData}>
                      {transaction.type ? "+" : "-"}
                    </td>
                    <td className={css.tableData}>{transaction.category}</td>
                    <td className={css.tableData}>{transaction.comment}</td>
                    <td
                      className={clsx(css.tableData, {
                        [css.plus]: transaction.type,
                        [css.minus]: !transaction.type,
                      })}
                    >
                      {transaction.amount}
                    </td>
                    <td className={css.tableData}>
                      <div className={css.wrapper}>
                        <button
                          className={css.btnEdit}
                          id={transaction._id}
                          onClick={() => openModalEditTransaction(transaction)}
                        >
                          <svg className={css.icon}>
                            <use xlinkHref={`${sprite}#pen`}></use>
                          </svg>
                        </button>
                        <button
                          className={css.btn}
                          onClick={() => {
                            dispatch(deleteTransaction(transaction._id)).then(
                              () => dispatch(fetchTransactions())
                            );
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        )}
      </div>
    </>
  );
};

export default TransactionList;
