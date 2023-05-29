import css from "./LoginForm.module.css";
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import sprite from "../../assets/icon/sprite.svg";
import ReusableInput from "../FormsUtils/ReusableInput";

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
}).required();

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        console.log(data)
        axios.post('/api/auth/sign-up', data,
            //     {
            //     headers: {
            //         'Authorization': `Bearer ${token}`
            //     }
            // }
        )
            .then(response => {
                // Obsługa odpowiedzi od backendu po pomyślnym przesłaniu danych
                console.log(response);
            })
            .catch(error => {
                // Obsługa błędu w przypadku niepowodzenia przesłania danych
                console.error(error);
            });
        reset();
    };
    console.log(errors);

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