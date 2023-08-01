import React from "react";
import "./auth.css";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../store/actions/authActions";

function Register() {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    // if (data.password !== data.confirm_password) {
    //   alert("password mismatch");
    // }
    console.log(data);

    // data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };
  return (
    <div className="Register">
      <form action="" onSubmit={handleSubmit(submitForm)}>
        {error && <div>{error}</div>}
        <div className="form-group">
          <label htmlFor="firstName">User Name</label>
          <input
            type="text"
            className="form-input"
            {...register("Username")}
            placeholder="User Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Email</label>
          <input
            type="email"
            className="form-input"
            {...register("Email")}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Phone</label>
          <input
            type="text"
            className="form-input"
            {...register("Phone")}
            placeholder="Phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Password</label>
          <input
            type="text"
            className="form-input"
            {...register("Password")}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Password Confirm</label>
          <input
            type="text"
            className="form-input"
            {...register("Password_confirm")}
            placeholder="Password Confirm"
          />
        </div>
        <button type="submit" className="button" disabled={loading}>
          {loading ? "LOADING..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
