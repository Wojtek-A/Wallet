import style from "./ModalAddTransaction.module.scss";
import closeBtn from "./../../images/closeBtn.svg";

export const ModalAddTransaction = () => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2 className={style.modal__title}>Add transaction</h2>
        <form className={style.modal__form}>
          <div className={style.modal__switch}>
            <p className={style.modal__switchFirstText}>Income</p>
            <label className={style.switch}>
              <input type="checkbox"></input>
              <span className={style.slider}></span>
            </label>
            <p className={style.modal__switchSecondText}>Expense</p>
          </div>
          <div className={style.modal__inputs}>
            <input
              type="number"
              name="value"
              placeholder="0.00"
              className={(style.modal__value, style.modal__input)}
              required
            ></input>
            <input
              type="date"
              name="date"
              className={(style.modal__date, style.modal__input)}
              required
            ></input>
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
            <button type="button" className={style.cancelBtn}>
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
