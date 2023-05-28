import css from "./MobileRegistrationPage.module.css";
import MobileRegistrationForm from "../../components/MobileRegistrationForm/MobileRegistrationForm.jsx"
import sprite from "../../assets/icon/sprite.svg";

const MobileRegistrationPage = () => {

    return (
        <>
            <div className={css.container}>
                <h1 className={css.title}>
                    <svg
                        className={css.icon}
                    >
                        <use xlinkHref={`${sprite}#wallet`} />
                    </svg>
                    Wallet
                </h1>
                <MobileRegistrationForm />
                <button type="button" className={css.button}>Log in</button>
            </div>
        </>
    );
};

export default MobileRegistrationPage;