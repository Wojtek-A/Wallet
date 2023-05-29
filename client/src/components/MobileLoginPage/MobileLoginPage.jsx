import css from "./MobileLoginPage.module.css";
import LoginForm from "../LoginForm/LoginForm.jsx"
import sprite from "../../assets/icon/sprite.svg";
import { Link } from "react-router-dom";

const MobileLoginPage = () => {

    return (
        <>
            <div className={css.container}>
                <h1 className={css.title}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#wallet`} />
                    </svg>
                    Wallet
                </h1>
                <LoginForm />
                <button type="button" className={css.button}>
                    <Link to="/register">Register</Link></button>
            </div>
        </>
    );
};

export default MobileLoginPage;