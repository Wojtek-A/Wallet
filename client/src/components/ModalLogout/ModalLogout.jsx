import { useDispatch } from "react-redux";

import style from "./ModalLogout.module.css";
import closeBtn from "./../../images/closeBtn.svg";
import { changeIsModalLogoutOpen } from "../../redux/global/slice";
import { logOut } from "../../redux/auth/operations";

export const ModalLogout = () => {
  const dispatch = useDispatch();

  const closeModal = (event) => {
    if (
      event.target.id === "overlay" ||
      event.target.nodeName === "IMG" ||
      event.target.name === "noBtn"
    ) {
      dispatch(changeIsModalLogoutOpen());
    }
  };

  const logout = (event) => {
    event.preventDefault();
    dispatch(logOut());
    dispatch(changeIsModalLogoutOpen());
  };

  return (
    <div
      id="overlay"
      className={style.overlay}
      onClick={(event) => closeModal(event)}
    >
      <div className={style.modal}>
        <h3 className={style.modal__title}>
          Are you sure, you want to logout?
        </h3>
        <form className={style.modal__form} onSubmit={logout}>
          <div className={style.modal__buttons}>
            <button type="submit" className={style.yesBtn}>
              YES
            </button>
            <button type="button" name="noBtn" className={style.noBtn}>
              NO
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
