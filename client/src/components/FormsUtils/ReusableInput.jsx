import css from "./ReusableInput.module.css";
import React, { useState } from 'react';

const ReusableInput = ({ fieldType, placeholder, validation, iconLink, iconClassName, errorsVariable }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <label className={`${css.label} 
            ${isActive ? css.activeLabel : ""}
            ${errorsVariable ? css.errorLabel : ""}`}>
                <svg className={`${iconClassName} 
                ${isActive ? css.activeIcon : css.inactiveIcon}
                ${errorsVariable ? css.errorIcon : ""}`}>
                    <use xlinkHref={iconLink} />
                </svg>
                <input
                    type={fieldType}
                    placeholder={placeholder}
                    {...validation}
                    aria-invalid={errorsVariable ? "true" : "false"}
                    className={`${css.input}`}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                />
            </label>
            {errorsVariable && <p role="alert" className={css.errorMessage}>{errorsVariable?.message}</p>}
        </>
    );
}

export default ReusableInput;

