import css from "./MobileRegistrationPage.module.css";
import MobileRegistrationForm from "../../components/MobileRegistrationForm/MobileRegistrationForm.jsx"

const MobileRegistrationPage = () => {

    return (
        <>
            <div className={css.container}>
                <h1 className={css.title}>Wallet</h1>
                <MobileRegistrationForm />
                <button type="button" className={css.button}>Log in</button>
            </div>
        </>
    );
};

export default MobileRegistrationPage;