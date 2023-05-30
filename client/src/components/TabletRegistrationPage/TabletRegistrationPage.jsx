import css from "./TabletRegistrationPage.module.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm.jsx";
import sprite from "../../assets/icon/sprite.svg";
import { Link } from "react-router-dom";

const TabletRegistrationPage = () => {

    return (
        <>
            <div className={css.container}>
                <div className={css.titleBox}>
                    <svg className={css.registerIcon}>
                        <use xlinkHref={`${sprite}#register`} />
                    </svg>
                    <h1 className={css.title}>Finance App</h1>
                </div>

                <div className={css.formBox}>
                    <div className={css.logoBox}>
                        <svg className={css.logoIcon}>
                            <use xlinkHref={`${sprite}#wallet`} />
                        </svg>
                        <h1 className={css.logo}>
                            Wallet
                        </h1>
                    </div>

                    <RegistrationForm />
                    <nav className={css.nav}>
                        <Link className={css.link} to="/login">
                            Log in
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default TabletRegistrationPage;