import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './AddFilm.css';

const AddFilm = (props) => {

  const [filmTitle, setFilmTitle] = useState('');
  const [filmOveriew, setFilmOveriew] = useState('');
  const [filmPoster, setFilmPoster] = useState('');
  const [filmPopularity, setFilmPopularity] = useState('');
  const [filmReleaseDate, setfilmReleaseDate] = useState('');
  const [filmGenres, setFilmGenres] = useState('');
  const [filmVoteAverage, setFilmVoteAverage] = useState('');
  const [filmVoteCount, setFilmVoteCount] = useState('');
  const [filmAdult, setFilmAdult] = useState('');

  const history = useHistory();

  /*   const setArrayGenres = (result) => {
      let genresArray = [];
      for (let i = 0; i < result.genres.length; i++) {
        genresArray.push(result.genres[i].name)
      };
      debugger;
      return genresArray;
    }; */

  useEffect(() => {
    if (!props.userData.isAdmin) {
      history.push('/NotFoundPage');
    };

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=b7250787f519598983a71dd72dba0889')
      .then(res => res.json())
      .then(
        (result) => {
          /* let genresArray = [];
          for (let i = 0; i < result.genres.length; i++) {
            genresArray.push(result.genres[i].name)
          };
          debugger;
          return genresArray; */
          setFilmGenres(result.genres);
        },
        (error) => {
          setFilmGenres(error);
        }
      )
  });

  const handleChange = (event) => {
    if (event.target.name === 'filmTitle') {
      setFilmTitle(event.target.value)
    } else if (event.target.name === 'filmOveriew') {
      setFilmOveriew(event.target.value)
    } else if (event.target.name === 'filmPoster') {
      setFilmPoster(event.target.value)
    } else if (event.target.name === 'filmPopularity') {
      setFilmPopularity(event.target.value)
    } else if (event.target.name === 'filmReleaseDate') {
      setfilmReleaseDate(event.target.value)
    } else if (event.target.name === 'filmGenres') {
      setFilmGenres(event.target.value)
    } else if (event.target.name === 'filmVoteAverage') {
      setFilmVoteAverage(event.target.value)
    } else if (event.target.name === 'filmVoteCount') {
      setFilmVoteCount(event.target.value)
    } else if (event.target.name === 'filmAdult') {
      setFilmAdult(event.target.value)
    }
  };

  const handleResetForm = () => {
    setFilmTitle('');
    setFilmOveriew('');
    setFilmPoster('');
    setFilmPopularity('');
    setfilmReleaseDate('');
    setFilmGenres('');
    setFilmVoteAverage('');
    setFilmVoteCount('');
    setFilmAdult('');

    document.querySelector('.input-title-error').style.display = 'none';
    document.querySelector('.input-textarea-overview-error').style.display = 'none';
    document.querySelector('.input-popularity-error').style.display = 'none';
    document.querySelector('.input-vote-average-error').style.display = 'none';
    document.querySelector('.input-vote-count-error').style.display = 'none';
  };

  return (
    <div className="addFilm-content">
      <form className="form-film" id="data-film" action="">
        <p className="input-title-error">
          Введите больше 2 символов!
        </p>
        <input className="input input-title"
          name="filmTitle"
          type="text"
          placeholder="Title"
          minlength="3"
          required
          value={filmTitle}
          onChange={handleChange}>
        </input>
        <p className="input-textarea-overview-error">
          Число символов должно быть от 6 до 150!
        </p>
        <textarea className="textarea-overview"
          name="filmOveriew"
          id="overview"
          placeholder="Overview"
          minlength="6"
          maxlength="150"
          required
          value={filmOveriew}
          onChange={handleChange}>
        </textarea>
        <label for="poster">
          Poster path
          </label>
        <input className="input input-poster"
          id="poster"
          name="filmPoster"
          type="file"
          placeholder="Poster"
          required
          value={filmPoster}
          onChange={handleChange} />
        <p className="input-popularity-error">
          Введенное значение должно быть числом!
        </p>
        <input className="input input-popularity"
          name="filmPopularity"
          type="number"
          placeholder="Popularity"
          required
          value={filmPopularity}
          onChange={handleChange} />
        <input className="input input-release-date"
          name="filmReleaseDate"
          type="date"
          placeholder="Release date"
          required
          value={filmReleaseDate}
          onChange={handleChange} />
        <select className="select-genres"
          name="filmGenres"
          form="data-film"
          required
          multiple
          value={filmGenres}
          onChange={handleChange}>
            {/* {filmGenres} */}
          {/* {filmGenres.map((item) => (
            <option
              className="genre"
              value={`${item.name}`}>
              {`${item.name}`}
            </option>
          ))} */}
        </select>
        <p className="input-vote-average-error">
          Введенное значение должно быть числом!
        </p>
        <input className="input input-vote-average"
          name="filmVoteAverage"
          type="number"
          placeholder="Vote average"
          required value={filmVoteAverage}
          onChange={handleChange} />
        <p className="input-vote-count-error">
          Введенное значение должно быть числом!
        </p>
        <input className="input input-vote-count"
          name="filmVoteCount"
          type="number"
          placeholder="Vote count"
          required
          value={filmVoteCount}
          onChange={handleChange} />
        <div className="checkbox-wrapper">
          <input className="input-checkbox-adult"
            id="checkbox-adult"
            name="filmAdult"
            type="checkbox"
            required
            value={filmAdult}
            onChange={handleChange} />
          <label for="checkbox-adult">
            adult
          </label>
        </div>
        <div className="button-container-addFilm">
          <button className="button button-add"
            type="button">
            Add
          </button>
          <button className="button button-clear"
            type="reset"
            onClick={handleResetForm}>
            Clear
          </button>
        </div>
      </form>
    </div >
  );
};

export default AddFilm;
AddFilm.displayName = "AddFilm";