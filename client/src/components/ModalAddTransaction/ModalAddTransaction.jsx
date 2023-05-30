import { useState } from "react";
import { useDispatch } from "react-redux";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
// import { useFormik } from "formik";
import { date } from "yup";

import { changeIsModalAddTransactionOpen } from "../../redux/global/slice";
import style from "./ModalAddTransaction.module.scss";
import closeBtn from "./../../images/closeBtn.svg";
import { categories } from "../../utils/transactionCategories";

export const ModalAddTransaction = () => {
  const [transactionType, setTransactionType] = useState(false);
  const [category, setCategory] = useState("");

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

    const type = transactionType ? "-" : "+";
    const value = event.target.amount.value;
    const date = event.target.date.value;
    const comment = event.target.comment.value;

    const newTransaction = {
      type,
      value: Number(value),
      date,
      comment,
      categoryId: transactionType
        ? category
        : "063f1132-ba5d-42b4-951d-44011ca46262",
    };
    dispatch(changeIsModalAddTransactionOpen());
    console.log(newTransaction);
  };

  const categorySelection = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory !== "063f1132-ba5d-42b4-951d-44011ca46262") {
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
            <p className={style.modal__switchFirstText}>Income</p>
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
            <p className={style.modal__switchSecondText}>Expense</p>
          </div>
          {!transactionType ? (
            <></>
          ) : (
            <select
              className={style.modal__categoriesSelect}
              onChange={categorySelection}
            >
              <option value="Select option" disabled selected>
                Select a category
              </option>
              {categories &&
                categories.map((category) => {
                  return (
                    <option
                      id={category.id}
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  );
                })}
            </select>
          )}
          <div className={style.modal__inputs}>
            <input
              type="number"
              name="amount"
              placeholder="0.00"
              className={style.modal__input}
              required
            ></input>
            <Datetime
              className={style.modal__input}
              controls={date}
              dateFormat="DD-MM-YYYY"
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
