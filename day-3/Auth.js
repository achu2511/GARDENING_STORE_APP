import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function App() {
  const [state, setState] = useState(false);

  const RegisterForm = (
    <form id="Regform">
      <input type="text" placeholder="username" />
      <input type="E-mail" placeholder="Email" />
      <input type="password" placeholder="password" />
      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );

  const LoginForm = (
    <form id="loginform">
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <Link to='/home'><button type="submit" className="btn">
        Login
      </button></Link>
      <a href="/#">Forgot password</a>
    </form>
  );

  function change(a){
    const b1=document.getElementById("login");
    const b2=document.getElementById("sign");
    if(a){
      b2.style.backgroundColor='#ffffffc3';
      b1.style.backgroundColor='rgb(249, 211, 226)';
    }else{
      b1.style.backgroundColor='#ffffffc3';
      b2.style.backgroundColor='rgb(249, 211, 226)';
    }
  }

  return (
    <div className="log1">
      <div className="acc-page">
        <div className="form-container">
          <div className="form-btn">
            <div className="re-conti">
              <div className="re-login" id="login" onClick={() => {setState(false);change(true);}}>Login</div>
              <div className="re-sign" id="sign" onClick={() => {setState(true);change(false)}}>Register</div>
            </div>
            
            <hr id="indicator" />
            {state ? RegisterForm : LoginForm}
          </div>
        </div>
      </div>
    </div>
  );
}
