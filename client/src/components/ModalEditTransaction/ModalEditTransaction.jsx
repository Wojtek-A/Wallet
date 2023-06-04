import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { changeIsModalEditTrasactionOpen } from "../../redux/global/slice";
import style from "./ModalEditTransaction.module.css";
import closeBtn from "./../../images/closeBtn.svg";
import { CATEGORY_NAME } from "../../redux/constant";
import { selectTransactionToEdit } from "../../redux/global/selectors";
import {
  fetchTransactions,
  updateTransaction,
} from "../../redux/wallet/wallet.thunk";

export const ModalEditTransaction = () => {
  const transactionToEdit = useSelector(selectTransactionToEdit);
  const [transactionType, setTransactionType] = useState(
    !transactionToEdit.type
  );
  const [category, setCategory] = useState(transactionToEdit.category);

  const dispatch = useDispatch();

  const closeModal = (event) => {
    if (
      event.target.id === "overlay" ||
      event.target.nodeName === "IMG" ||
      event.target.name === "closeBtn"
    ) {
      dispatch(changeIsModalEditTrasactionOpen());
    }
  };

  const editTransaction = (event) => {
    event.preventDefault();

    const transactionToUpdate = {
      transactionId: transactionToEdit._id,
      type: transactionToEdit.type,
      amount: event.target.amount.value,
      date: event.target.date.value,
      category:
        category !== "" && category !== "Income"
          ? transactionToEdit.category
          : category,
      comment: event.target.comment.value,
      owner: transactionToEdit.owner,
    };
    
    dispatch(updateTransaction(transactionToUpdate)).then(() =>
      dispatch(fetchTransactions())
    );
    dispatch(changeIsModalEditTrasactionOpen());
  };

  const categorySelection = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory !== "Income") {
      setCategory(selectedCategory);
    } else {
      setTransactionType(!transactionType);
    }
  };

  return (
    <div
      id="overlay"
      className={style.overlay}
      onClick={(event) => closeModal(event)}
    >
      <div className={style.modal}>
        <h2 className={style.modal__title}>Edit transaction</h2>
        <form
          className={style.modal__form}
          onSubmit={(event) => editTransaction(event)}
        >
          <div className={style.modal__switch}>
            <p
              className={
                !transactionType
                  ? style.modal__switchFirstTextChecked
                  : style.modal__switchTextNotChecked
              }
            >
              Income
            </p>
            <span className={style.switch}>/</span>
            <p
              className={
                transactionType
                  ? style.modal__switchSecondTextChecked
                  : style.modal__switchTextNotChecked
              }
            >
              Expense
            </p>
          </div>
          {!transactionType ? (
            <></>
          ) : (
            <div className={style.selectWrapper}>
              <div className={style.selectContainer}>
                <select
                  className={style.select}
                  onChange={categorySelection}
                  defaultValue={transactionToEdit.category}
                >
                  <option
                    value="Select option"
                    disabled
                    checked
                    hidden
                    className={style.select__placeholder}
                  >
                    Select a category
                  </option>
                  {CATEGORY_NAME &&
                    Object.values(CATEGORY_NAME).map((element, index) => {
                      if (element === "Income") {
                        return (
                          <option value={element} key={index} disabled hidden>
                            {element}
                          </option>
                        );
                      }
                      return (
                        <option value={element} key={index}>
                          {element}
                        </option>
                      );
                    })}
                </select>
                <div className={style.selectIcon}>&#9662;</div>
              </div>
            </div>
          )}
          <div className={style.modal__inputs}>
            <input
              type="number"
              name="amount"
              placeholder="0.00"
              step=".01"
              className={style.modal__input}
              defaultValue={transactionToEdit.amount}
              required
            ></input>
            <Datetime
              className={style.modal__input}
              dateFormat="YYYY-MM-DD"
              timeFormat={false}
              closeOnSelect={true}
              inputProps={{
                className: style.modal__date,
                name: "date",
              }}
              initialValue={new Date()}
              defaultValue={transactionToEdit.date}
              required
            />
          </div>
          <input
            type="text"
            name="comment"
            placeholder="Comment"
            className={style.modal__comment}
            defaultValue={transactionToEdit.comment}
          ></input>
          <div className={style.modal__buttons}>
            <button type="submit" className={style.addBtn}>
              SAVE
            </button>
            <button type="button" name="closeBtn" className={style.cancelBtn}>
              CANCEL
            </button>
          </div>
        </form>
        <img
          src={closeBtn}
          alt="Close Modal Button"
          className={style.closeBtn}
        ></img>
      </div>
    </div>
  );
};
