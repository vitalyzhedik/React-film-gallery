import React from 'react';
import './NotFoundPage.css';
import img from './img/NotFoundPage.jpg';
import { Component } from 'react';

class NotFoundPage extends Component {

componentDidMount () {
  document.querySelector('.header').style.display = 'none';
}

  render() {
    return (
      <div className="wrapper-img">
        <img className="img-not-found-page" src={img} alt="Not found page" />
      </div>
    )
  }
};

export default NotFoundPage;
NotFoundPage.displayName = "NotFoundPage";