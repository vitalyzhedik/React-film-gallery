import React from 'react';
import './Autorization.css';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Autorization extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      path: "/Autorization"
    };
  };

  handleChangeEmail = (event) => {
    this.setState({
      userEmail: event.target.value
    })
  };

  handleChangePassword = (event) => {
    this.setState({
      userPassword: event.target.value
    })
  };

  handleSign = () => {
    for (let i = 0; i < this.props.usersData.length; i++) {
      if (this.state.userPassword === this.props.usersData[i].password &&
        this.state.userEmail === this.props.usersData[i].email) {
        this.setState({
          path: "/"
        });
        document.querySelector('.input-email-error').style.display = 'none';
        document.querySelector('.input-password-error').style.display = 'none';
        break;
      } else if (this.state.userEmail === this.props.usersData[i].email &&
        this.state.userPassword !== this.props.usersData[i].password) {
        document.querySelector('.input-email-error').style.display = 'none';
        document.querySelector('.input-password-error').style.display = 'block';
        break;
      } else {
        document.querySelector('.input-email-error').style.display = 'block';
      };
    }

    this.props.getPath(this.state.path);
  }

  componentDidMount() {
    const signInButton = document.querySelector('.header-content__sign-button');
    signInButton.style.display = 'none';
  }

  render() {
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
            value={this.state.userEmail}
            onChange={this.handleChangeEmail} />
          <p className="input-password-error">
            Пароль неверный!
          </p>
          <input className="input input-password"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={this.state.userPassword}
            onChange={this.handleChangePassword} />
          <div className="button-container-autorization">
            <NavLink to={this.props.path}>
              <button className="button button-sign"
                type="button"
                onClick={this.handleSign}>
                Sign
                 </button>
            </NavLink>
            <NavLink to="/Registration">
              <button className="button button-reg"
                type="button">
                Registration
                 </button>
            </NavLink>
          </div>
        </form>
      </div >
    )
  }
};


export default Autorization;
Autorization.displayName = "Autorization";