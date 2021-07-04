import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './FilmCard.css';
import noImage from './img/noImage.jpg'

class FilmCard extends Component {

  setFilmData = () => {
    this.props.getFilmData(this.props.film);
  }

  render() {
    return (
      <li
        id={this.props.film.id}
        className="film-content__list--item"
        onClick={() => {
          this.setFilmData()
        }}>
        <NavLink to="/FilmPage">
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
          <button
            className="film-content__list--delete-button"
            styleName="display: none">
          </button>
        </NavLink>
      </li>
    )
  }
};

export default FilmCard;
FilmCard.displayName = "FilmCard";