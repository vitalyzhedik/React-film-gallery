import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddFilm.css';
import GenresList from './GenresList/GenresList';

const AddFilm = (props) => {

  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [poster_path, setPoster_path] = useState('');
  const [popularity, setPopularity] = useState();
  const [release_date, setRelease_date] = useState('');
  const [filmGenresAll, setFilmGenresAll] = useState([{ id: 1, name: '' }]);
  const [filmGenresChecked, setFilmGenresChecked] = useState([]);
  const [vote_average, setVote_average] = useState();
  const [vote_count, setVote_count] = useState();
  const [adult, setAdult] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!props.userData.isAdmin) {
      history.push('/NotFoundPage');
    };

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=b7250787f519598983a71dd72dba0889')
      .then(res => res.json())
      .then(
        (result) => {
          setFilmGenresAll(result.genres);
        },
        (error) => {
          setFilmGenresAll(error);
        }
      )
  });

  const handleChange = (event) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value)
    } else if (event.target.name === 'overview') {
      setOverview(event.target.value)
    } else if (event.target.name === 'poster_path') {
      setPoster_path(event.target.value)
    } else if (event.target.name === 'popularity') {
      setPopularity(event.target.value)
    } else if (event.target.name === 'release_date') {
      setRelease_date(event.target.value)
    } else if (event.target.name === 'filmGenres') {
      setFilmGenresChecked(event.target.value)
    } else if (event.target.name === 'vote_average') {
      setVote_average(event.target.value)
    } else if (event.target.name === 'vote_count') {
      setVote_count(event.target.value)
    } else if (event.target.name === 'adult') {
      setAdult(event.target.value)
    }
  };

  const handleSubmitForm = () => {
    if (title.length < 3) {
      document.querySelector('.input-title-error').style.display = 'block';
    } else if (overview.length > 150 || overview.length < 6) {
      document.querySelector('.input-title-error').style.display = 'none';
      document.querySelector('.input-textarea-overview-error').style.display = 'block';
    } else if (!poster_path) {
      document.querySelector('.input-textarea-overview-error').style.display = 'none';
      document.querySelector('.input-poster-error').style.display = 'block';
    } else if (!popularity) {
      document.querySelector('.input-poster-error').style.display = 'none';
      document.querySelector('.input-popularity-error').style.display = 'block';
    } else if (!release_date) {
      document.querySelector('.input-popularity-error').style.display = 'none';
      document.querySelector('.input-release-date-error').style.display = 'block';
    } else if (!vote_average) {
      document.querySelector('.input-release-date-error').style.display = 'none';
      document.querySelector('.input-vote-average-error').style.display = 'block';
    } else if (!vote_count) {
      document.querySelector('.input-vote-average-error').style.display = 'none';
      document.querySelector('.input-vote-count-error').style.display = 'block';
    } else {
      document.querySelector('.input-vote-count-error').style.display = 'none';
      handleResetForm();
    }

    let n = 0;

    props.getNewFilmData({
      title,
      overview,
      poster_path,
      popularity,
      release_date,
      filmGenresAll,
      filmGenresChecked,
      vote_average,
      vote_count,
      adult,
      id: -1 - n,
    });
  };

  const handleResetForm = () => {
    setTitle('');
    setOverview('');
    setPoster_path('');
    setPopularity('');
    setRelease_date('');
    setFilmGenresAll([{ id: 1, name: '' }]);
    setFilmGenresChecked([]);
    setVote_average('');
    setVote_count('');
    setAdult(false);

    document.querySelector('.input-title-error').style.display = 'none';
    document.querySelector('.input-textarea-overview-error').style.display = 'none';
    document.querySelector('.input-popularity-error').style.display = 'none';
    document.querySelector('.input-vote-average-error').style.display = 'none';
    document.querySelector('.input-vote-count-error').style.display = 'none';
    document.querySelector('.input-poster-error').style.display = 'none';
    document.querySelector('.input-popularity-error').style.display = 'none';
    document.querySelector('.input-release-date-error').style.display = 'none';
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
          name="title"
          type="text"
          placeholder="Title"
          minlength="3"
          required
          value={title}
          onChange={handleChange}>
        </input>
        <p className="input-textarea-overview-error">
          Число символов должно быть от 6 до 150!
        </p>
        <textarea className="textarea-overview"
          name="overview"
          id="overview"
          placeholder="Overview"
          minlength="6"
          maxlength="150"
          required
          value={overview}
          onChange={handleChange}>
        </textarea>
        <p className="input-poster-error">
          Добавьте постер!
        </p>
        <label for="poster">
          Poster path
          </label>
        <input className="input input-poster"
          id="poster"
          name="poster_path"
          type="file"
          placeholder="Poster"
          required
          value={poster_path}
          onChange={handleChange} />
        <p className="input-popularity-error">
          Введите значение!
        </p>
        <input className="input input-popularity"
          name="popularity"
          type="number"
          placeholder="Popularity"
          required
          value={popularity}
          onChange={handleChange} />
        <p className="input-release-date-error">
          Введите значение!
        </p>
        <input className="input input-release-date"
          name="release_date"
          type="date"
          placeholder="Release date"
          required
          value={release_date}
          onChange={handleChange} />
        <select className="select-genres"
          name="filmGenres"
          form="data-film"
          required
          multiple={true}>
          {filmGenresAll.map((item) => (
            <GenresList
              name={item.name}
              key={item.id} />
          ))}
        </select>
        <p className="input-vote-average-error">
          Введите значение!
        </p>
        <input className="input input-vote-average"
          name="vote_average"
          type="number"
          placeholder="Vote average"
          required value={vote_average}
          onChange={handleChange} />
        <p className="input-vote-count-error">
          Введите значение!
        </p>
        <input className="input input-vote-count"
          name="vote_count"
          type="number"
          placeholder="Vote count"
          required
          value={vote_count}
          onChange={handleChange} />
        <div className="checkbox-wrapper">
          <input className="input-checkbox-adult"
            id="checkbox-adult"
            name="adult"
            type="checkbox"
            required
            value={adult}
            onChange={handleChange} />
          <label for="checkbox-adult">
            adult
          </label>
        </div>
        <div className="button-container-addFilm">
          <button className="button button-add"
            type="button"
            onClick={handleSubmitForm}>
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