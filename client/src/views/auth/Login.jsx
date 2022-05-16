import React from "react";
import apiService from "../services/auth";
// import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import "../../css/authForm.css"


export const Login = (props) => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const res = await apiService.login(data.username, data.password)
    console.log(res)
    await props.setLoggedInUser(res)
    navigate('/profile');
  };

  return (
      <div className="auth-div">
      <h1>Welcome back</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="input"
            {...register("username", {
              required: "Please enter a valid username",
            })}
            placeholder="Username"
            name="username"
          />
          <p>{errors.username?.message}</p>

          <input type="password"
            {...register("password", {
              required: "This is required",
              minLength: {
                value: 8,
                message: "Password must be over 8 characters",
              },
            })}
            placeholder="enter a password"
            name="password"
          />
          <p>{errors.password?.message}</p>
          <button className="btn" type="submit">Login</button>
        </form>
      </div>
  );
};
