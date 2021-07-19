import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './FilmCard.css';
import noImage from './img/noImage.jpg'

class FilmCard extends Component {

  componentDidMount() {
    if (this.props.userData.isAdmin) {
      const addFilmlink = document.querySelector('.add-film-link');
      addFilmlink.style.display = 'block';
      const deleteButtonFilm = document.querySelectorAll('.film-content__list--delete-button');
      deleteButtonFilm.forEach((item) => {
        item.style.display = 'block';
      });
      const filmCards = document.querySelectorAll('.film-content__list--item');
      filmCards.forEach((item) => {
        item.classList.add('film-content__list--item-admin');
      });
    };
    if (!this.props.userData.isAdmin) {
      const deleteButtonFilm = document.querySelectorAll('.film-content__list--delete-button');
      deleteButtonFilm.forEach((item) => {
        item.style.display = 'none';
      });
      const filmCards = document.querySelectorAll('.film-content__list--item');
      filmCards.forEach((item) => {
        item.classList.remove('film-content__list--item-admin');
      });
    }
  };

  componentDidUpdate() {
    if (!this.props.userData.isAdmin) {
      const deleteButtonFilm = document.querySelectorAll('.film-content__list--delete-button');
      deleteButtonFilm.forEach((item) => {
        item.style.display = 'none';
      });
      const filmCards = document.querySelectorAll('.film-content__list--item');
      filmCards.forEach((item) => {
        item.classList.remove('film-content__list--item-admin');
      });
    }
  };

  setFilmData = () => {
    this.props.getFilmData(this.props.film);
  };

  deleteFilmCard = (id) => {
    const filmCard = document.getElementById(`${id}`);
    filmCard.style.display = 'none';
  };


  render() {
    return (
      <li
        id={this.props.film.id}
        className="film-content__list--item"
        onClick={() => {
          this.setFilmData()
        }}>
        <NavLink className="film-image-link" to="/FilmPage">
          <img
            className="film-image"
            src={`https://image.tmdb.org/t/p/w200${this.props.film.poster_path}`}
            onError={(e) => {
              e.target.src = noImage
            }}
            alt={`${this.props.film.title}`} />
          <p className="film-title">
            {`${this.props.film.title}`}
          </p>
          <div className="film-content__list--item-text">
            <div>
              release_date: {`${this.props.film.release_date}`}
            </div>
            <div>
              vote_average: {`${this.props.film.vote_average}`}
            </div>
          </div>
        </NavLink>
        <button
          className="film-content__list--delete-button"
          onClick={() => {
            this.deleteFilmCard(this.props.film.id)
          }
          }>
        </button>
      </li>
    )
  }
};

export default FilmCard;
FilmCard.displayName = "FilmCard";