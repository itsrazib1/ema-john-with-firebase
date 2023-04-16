import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
const Login = () => {
    const {singIn} = useContext(AuthContext);
    const Handellogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        singIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset('');
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={Handellogin}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
            <p>
              <small>
                <span>Hide Password</span>  <span>Show Password</span>
              </small>
            </p>
          </div>
          <input className="btn-submit" type="submit" value="Login" />
        </form>
        <p>
          <small className="crnmedel">
            New to Ema-john? <Link to="/SingUP">Create New Account</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
