import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './Autorization.css';

const Autorization = (props) => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const history = useHistory();

  useEffect(() => {
    const signInButton = document.querySelector('.header-content__sign-button');
    signInButton.style.display = 'none';
  });

  const handleChangeEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setUserPassword(event.target.value)
  };

  const handleSign = () => {
    for (let i = 0; i < props.usersData.length; i++) {
      if (userPassword === props.usersData[i].password &&
        userEmail === props.usersData[i].email) {
        props.getUserData({
          isAdmin: false,
          isAutorized: true,
          userName: props.usersData[i].name
        });
        if (userEmail === "Admin@mail.ru" && userPassword === "Admin") {
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
      };
    };
  };

  return (
    <div className="autorization-content">
      <form action="">
        <h1 className="form-title">
          Sign In
          </h1>
        <p className="input-email-error">
          Такого пользователя не существует!
          </p>
        <input className="input input-email"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={userEmail}
          onChange={handleChangeEmail} />
        <p className="input-password-error">
          Пароль неверный!
          </p>
        <input className="input input-password"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={userPassword}
          onChange={handleChangePassword} />
        <div className="button-container-autorization">
          <button className="button button-sign"
            type="button"
            onClick={handleSign}>
            Sign
          </button>
          <NavLink to="/Registration">
            <button className="button button-reg"
              type="button">
              Registration
            </button>
          </NavLink>
        </div>
      </form>
    </div >
  );
};

export default Autorization;
Autorization.displayName = "Autorization";