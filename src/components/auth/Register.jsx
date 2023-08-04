// import React from "react";
// import "./auth.css";
// import { Form, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import { registerUser } from "../store/actions/authActions";

// function Register() {
//   const { loading, userInfo, error, success } = useSelector(
//     (state) => state.auth
//   );

//   const { register, handleSubmit } = useForm();

//   const submitForm = (data) => {
//     // if (data.password !== data.confirm_password) {
//     //   alert("password mismatch");
//     // }
//     console.log(data);

//     // data.email = data.email.toLowerCase();
//     dispatch(registerUser(data));
//   };
//   return (
//     <div className="Register">
//       <form action="" onSubmit={handleSubmit(submitForm)}>
//         {error && <div>{error}</div>}
//         <div className="form-group">
//           <label htmlFor="firstName">User Name</label>
//           <input
//             type="text"
//             className="form-input"
//             {...register("Username")}
//             placeholder="User Name"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="firstName">Email</label>
//           <input
//             type="email"
//             className="form-input"
//             {...register("Email")}
//             placeholder="Email"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="firstName">Phone</label>
//           <input
//             type="text"
//             className="form-input"
//             {...register("Phone")}
//             placeholder="Phone"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="firstName">Password</label>
//           <input
//             type="text"
//             className="form-input"
//             {...register("Password")}
//             placeholder="Password"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="firstName">Password Confirm</label>
//           <input
//             type="text"
//             className="form-input"
//             {...register("Password_confirm")}
//             placeholder="Password Confirm"
//           />
//         </div>
//         <button type="submit" className="button" disabled={loading}>
//           {loading ? "LOADING..." : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { registerUser } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
// import "./RegisterForm.css";
// import { useAuth } from "../../../contexts/AuthContextProvider";
// import Loader from "../../Loader";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [phone, setLastName] = useState("");
  const dispatch = useDispatch();

  // const { handleRegister, loading, error, setError } = useAuth();
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("заполните поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      formData.append("username", name);
      formData.append("phone", phone);

      dispatch(registerUser(formData));
    }
    if (loading) {
      return "Loading";
    }
  }
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="body"
      >
        <div className="circle"></div>
        <div className="register-form-container">
          <form action="">
            <h1>Register</h1>
            {error ? <h2>{error}</h2> : null}
            <div className="form-fields">
              <div className="form-field">
                <input
                  type="text"
                  required
                  // pattern="[а-яА-Я]+"
                  title="Имя может содержать только буквы."
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="text"
                />
              </div>
              <div className="form-field">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="password confirm"
                  required
                  minlength="8"
                  maxlength="128"
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="first name"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="last name"
                  required
                />
              </div>
            </div>
            <div className="form-buttons">
              <button onClick={handleSave} className="button">
                register
              </button>
              <div className="divider">или</div>
              <a href="#" className="button button-google">
                Google
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
