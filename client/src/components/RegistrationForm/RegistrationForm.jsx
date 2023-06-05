import css from "./RegistrationForm.module.css";
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import sprite from "../../assets/icon/sprite.svg";
import ReusableInput from "../FormsUtils/ReusableInput";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const passwordError = "Password must contain at least: one uppercase letter, one special character and consist of 6 to 12 characters"

const schema = yup.object({
    email: yup
        .string()
        .email("Incorrect e-mail address")
        .required("E-mail is required"),
    password: yup
        .string()
        .min(6, passwordError)
        .max(12, passwordError)
        .matches(
            /[A-Z]/, passwordError
        )
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/, passwordError
        )
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], "Passwords must match")
        .required("Confirm password is required"),
    login: yup
        .string()
        .required("Login is required")
        .min(1, "Login must be at least 8 characters long")
        .max(12, "Login cannot be longer than 20 characters"),
}).required();

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = data => {
        dispatch(
            registerUser({
                email: data.email,
                password: data.password,
                username: data.login,
            })
        ).then(() => navigate('/login')).catch(() => reset())
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.registerForm}>

            <ReusableInput
                fieldType="email"
                placeholder="Email"
                validation={register("email")}
                iconLink={`${sprite}#envelope`}
                iconClassName={css.iconEmail}
                errorsVariable={errors.email}
            />
            <ReusableInput
                fieldType="password"
                placeholder="Password"
                validation={register("password")}
                iconLink={`${sprite}#padlock`}
                iconClassName={css.iconPadlock}
                errorsVariable={errors.password}
            />
            <ReusableInput
                fieldType="password"
                placeholder="Confirm Password"
                validation={register("confirmPassword")}
                iconLink={`${sprite}#padlock`}
                iconClassName={css.iconPadlock}
                errorsVariable={errors.confirmPassword}
            />
            <ReusableInput
                fieldType="text"
                placeholder="Login"
                validation={register("login")}
                iconLink={`${sprite}#user`}
                iconClassName={css.iconUser}
                errorsVariable={errors.login}
            />
            <button
                type="submit"
                className={css.registerButton}>
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
