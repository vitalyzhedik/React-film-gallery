import React from 'react';
import './Registration.css';
import { Component } from 'react';

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userSurName: "",
      userPassword: "",
      userConfirmPassword: "",
      userEmail: "",
    };
  };

  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  componentDidMount() {
    const signInButton = document.querySelector('.header-content__sign-button');
    signInButton.style.display = 'none';
  }

  render() {
    const {userName, userSurName, userPassword, userConfirmPassword, userEmail} = this.state;
    return (
      <div className="registration-content">
        <form action="">
          <h1 className="form-title">
            Registration
          </h1>
          <p className="input-name-error">
            Введите больше 6 символов!
          </p>
          <input
            className="input-reg input-name"
            name="userName"
            type="text"
            placeholder="Name"
            minlength="7"
            required 
            value={userName}
            onChange={this.handleChange}/>
          <p className="input-surname-error">
            Введите больше 6 символов!
          </p>
          <input
            className="input-reg input-surname"
            name="userSurName"
            type="text"
            placeholder="Surname"
            minlength="7"
            required 
            value={userSurName}
            onChange={this.handleChange}/>
          <p className="input-password-error">
            Введите больше 6 символов!
          </p>
          <input
            className="input-reg input-password"
            name="userPassword"
            type="password"
            placeholder="Password"
            minlength="7"
            required 
            value={userPassword}
            onChange={this.handleChange}/>
          <p className="input-confirm-password-error">
            Ошибка подтверждение пароля!
          </p>
          <input
            className="input-reg input-confirm-password"
            name="userConfirmPassword"
            type="password"
            placeholder="Confirm Password"
            minlength="7"
            required 
            value={userConfirmPassword}
            onChange={this.handleChange}/>
          <p className="input-email-error">
            Пользователь с таким email зарегистрирован!
          </p>
          <input
            className="input-reg input-email"
            name="userEmail"
            type="email"
            placeholder="Email" 
            value={userEmail}
            onChange={this.handleChange}/>
          <div className="button-container-reg">
            <button
              className="button button-sign-up"
              type="button">
              Sign Up
              </button>
            <button
              className="button button-sign-clear"
              type="reset">
              Clear
              </button>
          </div>
        </form>
      </div >
    )
  }
};


export default Registration;
Registration.displayName = "Registration";