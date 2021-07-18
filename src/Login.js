import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
    //some fancy firebase login --===-=
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it is successfully creat new user
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG8.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signinButton">
            Sign In
          </button>
          <p className="login_p">
            Choosing "Keep me signed in" reduces the number of times you're
            asked to Sign-In on this device. To keep your account secure, use
            this option only on your personal devices.
          </p>
          <button
            type="submit"
            onClick={register}
            className="login_registerButton"
          >
            Create New's Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
