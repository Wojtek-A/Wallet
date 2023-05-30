import css from "./DesktopLoginPage.module.css";
import LoginForm from "../LoginForm/LoginForm.jsx"
import sprite from "../../assets/icon/sprite.svg";
import { Link } from "react-router-dom";

const DesktopLoginPage = () => {

    return (
        <>
            <div className={css.container}>
                <div className={css.titleBox}>
                    <svg className={css.loginIcon}>
                        <use xlinkHref={`${sprite}#login`} />
                    </svg>
                    <h1 className={css.title}>Finance App</h1>
                </div>

                <div className={css.glassmorphism}>
                    <div className={css.formBox}>
                        <div className={css.logoBox}>
                            <svg className={css.logoIcon}>
                                <use xlinkHref={`${sprite}#wallet`} />
                            </svg>
                            <h1 className={css.logo}>
                                Wallet
                            </h1>
                        </div>

                        <LoginForm />
                        <nav className={css.nav}>
                            <Link className={css.link} to="/register">
                                Register
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DesktopLoginPage;