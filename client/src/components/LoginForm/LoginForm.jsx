import css from "./LoginForm.module.css";
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import sprite from "../../assets/icon/sprite.svg";
import ReusableInput from "../FormsUtils/ReusableInput";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const passwordError = "Password is required";

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
        .required(passwordError),
}).required();

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch()
    const onSubmit = data => {
        dispatch(
            logIn({
                email: data.email,
                password: data.password,
            }))
        reset();
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
            <button
                type="submit"
                className={css.registerButton}>
                Log in
            </button>
        </form>
    );
};

export default LoginForm;