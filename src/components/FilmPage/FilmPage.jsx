import React from 'react';
import './FilmPage.css';
import noImage from './img/noImage.jpg'

const FilmPage = (props) => {
  return (
    <div className="wrapper" id={props.filmData.id}>
      <div className="wrapper__image">
        <img className="title-image"
          src={`https://image.tmdb.org/t/p/w200${props.filmData.poster_path}`}
          alt={`${props.filmData.title}`}
          onError={(e) => {
            e.target.src = noImage
          }} />
      </div>
      <div className="wrapper__button">
        <button className="button button-del">
        </button>
        <button className="button button-redactor">
        </button>
      </div>
      <div className="wrapper__text">
        <p className="wrapper__text--title">
          {props.filmData.title}
        </p>
        <ul className="wrapper__text--list">
          <li className="wrapper__text--list-item">
            <span className="list-item-bold">overview:</span>{props.filmData.overview}
          </li>
          <li className="wrapper__text--list-item">
            <span className="list-item-bold">genres:</span>filmGenresList
          </li>
          <li className="wrapper__text--list-item">
            <span className="list-item-bold">popularity:</span>{props.filmData.popularity}
          </li>
          <li className="wrapper__text--list-item">
            <span className="list-item-bold">release_date:</span>{props.filmData.release_date}
          </li>
          <li className="wrapper__text--list-item">
            <span className="list-item-bold">vote_average:</span>{props.filmData.vote_average}
          </li>
          <li className="wrapper__text--list-item">
            <span className="list-item-bold">vote_count:</span>{props.filmData.vote_count}
          </li>
          <li className="wrapper__text--list-item vote-rating">
            <span className="list-item-bold">vote(rating):</span>
            <input className="input-rating" type="number" name="rating" id="" min='1' max='10' placeholder='Rating' />
            <button className="vote-rating-button">add vote</button>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default FilmPage;
FilmPage.displayName = "FilmPage";