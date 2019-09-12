import React from 'react';
import './login.css';

export default function Login(props) {
  return (
    <div className="login-div">
      <form>
        <div className="form-content">
        <label className="name-label" htmlFor="username">Name</label>
        <input className="name-input" name="username" value={props.username} type="text" onChange={props.onChange}/>
        <label className="password-label" htmlFor="password">Password</label>
        <input className="password-input" name="password" type="password"/>
        </div>
        <div className="button-div">
        <button className="login-button" onClick={props.nextButton}>Login</button>
        </div>
      </form>
    </div>
  )
}
