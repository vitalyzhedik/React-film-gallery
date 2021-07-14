import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Registration.css';

const Registration = (props) => {
  const [userName, setUserName] = useState('');
  const [userSurName, setUserSurName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const history = useHistory();

  useEffect(() => {
    const signInButton = document.querySelector('.header-content__sign-button');
    signInButton.style.display = 'none';
  });

  const handleChange = (event) => {
    if (event.target.name === 'userName') {
      setUserName(event.target.value)
    } else if (event.target.name === 'userSurName') {
      setUserSurName(event.target.value)
    } else if (event.target.name === 'userPassword') {
      setUserPassword(event.target.value)
    } else if (event.target.name === 'userConfirmPassword') {
      setUserConfirmPassword(event.target.value)
    } else if (event.target.name === 'userEmail') {
      setUserEmail(event.target.value)
    }
  };

  const handleResetForm = () => {
    setUserName('');
    setUserSurName('');
    setUserPassword('');
    setUserConfirmPassword('');
    setUserEmail('');

    document.querySelector('.input-email-error').style.display = 'none';
    document.querySelector('.input-password-error').style.display = 'none';
    document.querySelector('.input-confirm-password-error').style.display = 'none';
    document.querySelector('.input-name-error').style.display = 'none';
    document.querySelector('.input-surname-error').style.display = 'none';
  };

  const handleSignUp = () => {
    if (userName.length < 7) {
      document.querySelector('.input-name-error').style.display = 'block';
    };
    if (userSurName.length < 7) {
      document.querySelector('.input-surname-error').style.display = 'block';
    };
    if (userPassword.length < 7) {
      document.querySelector('.input-password-error').style.display = 'block';
    };
    for (let i = 0; i < props.usersData.length; i++) {
      if (userEmail === props.usersData[i].email) {
        document.querySelector('.input-email-error').style.display = 'block';
        break;
      } else if (userPassword !== userConfirmPassword) {
        document.querySelector('.input-confirm-password-error').style.display = 'block';
        break;
      } else if (userEmail !== props.usersData[i].email &&
        userName.length > 7 &&
        userSurName.length > 7 && 
        userPassword === userConfirmPassword) {
          props.getUserData({
            isAdmin: false,
            isAutorized: true,
            userName: userName
          });
          history.push('/');
        break;
      }
      /* if (userName.length > 7 &&
        userSurName.length > 7  &&
        userPassword.length > 7 &&
        userEmail !== props.usersData[i].email ) {
          debugger;
        console.log("yeeee");
        break;
      } */

      /* if (userEmail === "Admin@mail.ru" && userPassword === "Admin") {
        props.getUserData({
          isAdmin: true,
          isAutorized: true,
          userName: props.usersData[i].name
        });
      }
      document.querySelector('.input-email-error').style.display = 'none';
      document.querySelector('.input-password-error').style.display = 'none';
      history.push('/');
      break;
    } else if (userEmail === props.usersData[i].email &&
      userPassword !== props.usersData[i].password) {
      document.querySelector('.input-email-error').style.display = 'none';
      document.querySelector('.input-password-error').style.display = 'block';
      break;
    } else {
      document.querySelector('.input-email-error').style.display = 'block';
    }; */
    };
  };


  return (
    <div className="registration-content">
      <form className="registration-form" action="">
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
          onChange={handleChange} />
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
          onChange={handleChange} />
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
          onChange={handleChange} />
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
          onChange={handleChange} />
        <p className="input-email-error">
          Пользователь с таким email зарегистрирован!
          </p>
        <input
          className="input-reg input-email"
          name="userEmail"
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={handleChange} />
        <div className="button-container-reg">
          <button
            className="button button-sign-up"
            type="button"
            onClick={handleSignUp}>
            Sign Up
          </button>
          <button
            className="button button-sign-clear"
            type="reset"
            onClick={handleResetForm}>
            Clear
          </button>
        </div>
      </form>
    </div >
  )
};

export default Registration;
Registration.displayName = "Registration";