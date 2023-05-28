import css from "./MobileRegistrationForm.module.css";
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import sprite from "../../assets/icon/sprite.svg";

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

const MobileRegistrationForm = () => {
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
            <svg className={css.iconEmail}>
                <use xlinkHref={`${sprite}#envelope`} />
            </svg>
            <input
                type="email"
                placeholder="Email"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
                className={css.input}
            />
            {errors.email && <p role="alert" className={css.errorMessage}>{errors.email?.message}</p>}

            <input
                type="password"
                placeholder="Password"
                {...register("password")}
                aria-invalid={errors.password ? "true" : "false"}
                className={css.input}
            />
            {errors.password && <p role="alert" className={css.errorMessage}>{errors.password?.message}</p>}

            <input
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword")}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                className={css.input}
            />
            {errors.confirmPassword && <p role="alert" className={css.errorMessage}>{errors.confirmPassword?.message}</p>}

            <input
                type="text"
                placeholder="Login"
                {...register("login")}
                aria-invalid={errors.login ? "true" : "false"}
                className={css.input}
            />
            {errors.login && <p role="alert" className={css.errorMessage}>{errors.login?.message}</p>}

            <button type="submit" className={css.registerButton}>Register</button>
        </form>
    );
};

export default MobileRegistrationForm;