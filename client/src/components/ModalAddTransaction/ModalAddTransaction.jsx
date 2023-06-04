import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { addTransaction } from "../../redux/wallet/wallet.thunk";
import { changeIsModalAddTransactionOpen } from "../../redux/global/slice";
import style from "./ModalAddTransaction.module.css";
import closeBtn from "./../../images/closeBtn.svg";
import { CATEGORY_NAME } from "../../redux/constant";
import { selectUser } from "../../redux/auth/selectors";

export const ModalAddTransaction = () => {
  const [transactionType, setTransactionType] = useState(false);
  const [category, setCategory] = useState("");
  const activeUser = useSelector(selectUser);

  const dispatch = useDispatch();

  const closeModal = (event) => {
    if (
      event.target.id === "overlay" ||
      event.target.nodeName === "IMG" ||
      event.target.name === "closeBtn"
    ) {
      dispatch(changeIsModalAddTransactionOpen());
    }
  };

  const submitTransaction = (event) => {
    event.preventDefault();

    const type = transactionType ? false : true;
    const amount = event.target.amount.value;
    const data = event.target.date.value;
    const comment = event.target.comment.value;
    const owner = activeUser.id;
    const date = new Date(data);

    console.log(date.toISOString());

    const newTransaction = {
      type,
      amount: parseFloat(amount).toFixed(2),
      date,
      comment,
      category: transactionType ? category : "Income",
      owner,
    };
    dispatch(addTransaction(newTransaction));
    dispatch(changeIsModalAddTransactionOpen());
    console.log(newTransaction);
    // addTransaction(newTransaction);
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
        <h2 className={style.modal__title}>Add transaction</h2>
        <form className={style.modal__form} onSubmit={submitTransaction}>
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
            <label className={style.switch}>
              <input
                type="checkbox"
                checked={transactionType}
                onChange={() => setTransactionType(!transactionType)}
              ></input>
              <span
                className={transactionType ? style.slidered : style.slider}
              ></span>
            </label>
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
                <select className={style.select} onChange={categorySelection}>
                  <option
                    value="Select option"
                    disabled
                    selected
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
              required
            />
          </div>
          <input
            type="text"
            name="comment"
            placeholder="Comment"
            className={style.modal__comment}
          ></input>
          <div className={style.modal__buttons}>
            <button type="submit" className={style.addBtn}>
              ADD
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
