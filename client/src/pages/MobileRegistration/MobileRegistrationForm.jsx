import css from "./MobileRegistrationForm.module.css";
import React from 'react';
import { useForm } from 'react-hook-form';

const MobileRegistrationForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    console.log(watch("Email"));
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="email"
                placeholder="Email"
                {...register("Email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
            />
            <input
                type="password"
                placeholder="Password"
                {...register("Password", { required: true, max: 12, min: 6, maxLength: 6, pattern: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/i })}

            />
            <input
                type="password"
                placeholder="Confirm password"
                {...register("Confirm password", { required: true, max: 12, min: 6, maxLength: 12, pattern: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/i })}
            />
            <input
                type="text"
                placeholder="Login"
                {...register("Login", { required: true, max: 12, min: 1, maxLength: 12 })}
            />

            <input type="submit" />
        </form>
    );
};

export default MobileRegistrationForm;