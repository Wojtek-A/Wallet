import css from "./MobileRegistrationForm.module.css";
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup
        .string()
        .email("Incorrect e-mail address")
        .required("E-mail is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters long")
        .max(12, "Password cannot be longer than 12 characters")
        .matches(
            /[A-Z]/,
            "Password must contain uppercase letter and special character"
        )
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain uppercase letter and special character"
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
        reset();
    };
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.registerForm}>
            <input
                type="email"
                placeholder="Email"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}

            <input
                type="password"
                placeholder="Password"
                {...register("password")}
                aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p role="alert">{errors.password?.message}</p>}

            <input
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword")}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
            />
            {errors.confirmPassword && <p role="alert">{errors.confirmPassword?.message}</p>}

            <input
                type="text"
                placeholder="Login"
                {...register("login")}
                aria-invalid={errors.login ? "true" : "false"}
            />
            {errors.login && <p role="alert">{errors.login?.message}</p>}

            <button type="submit">Register</button>
        </form>
    );
};

export default MobileRegistrationForm;