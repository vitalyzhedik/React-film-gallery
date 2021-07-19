import React from 'react';
import './FilmPage.css';
import noImage from './img/noImage.jpg';
import { Component } from 'react';
import Genre from './Genre/Genre';

class FilmPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      genres: [],
      genresText: [],
      vote_count: this.props.filmData.vote_count,
      voteInput: '',
    };
  };

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.filmData.id}?api_key=b7250787f519598983a71dd72dba0889&language=en-US`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            genres: result.genres,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      if (this.props.userData.isAutorized === true) {
        document.querySelector('.vote-rating').style.display = 'block';
      };
      if (this.props.userData.isAdmin === true) {
        const deleteFilmBtn = document.querySelector('.button-del');
        deleteFilmBtn.style.display = 'block';
        const redactorFilmBtn = document.querySelector('.button-redactor');
        redactorFilmBtn.style.display = 'block';
      }
    }
  filmGenresList = () => {
    let filmGenresList = [];
    for (let i = 0; i < this.state.genres; i++) {
      filmGenresList.push(this.state.genres[i].name)
    };
    this.setState({
      genresText: filmGenresList,
    });
  };

  addVoteCount = () => {
    this.setState({
      vote_count: this.state.vote_count + 1,
    });
  };

  handleChangeVoteRating = (event) => {
    this.setState({
      voteInput: event.target.value,
    });
  };

  deleteFilm = () => {
    this.props.getfilmIdForDelete(this.props.filmData.id)
  };

  render() {
    const { id, poster_path, title, overview, popularity, release_date, vote_average } = this.props.filmData;
    return (
      <div className="wrapper" id={id}>
        <div className="wrapper__image">
          <img className="title-image"
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
            onError={(e) => {
              e.target.src = noImage
            }} />
        </div>
        <div className="wrapper__button">
          <button className="button-del"
          onClick={this.getFilmId}>
          </button>
          <button className="button-redactor">
          </button>
        </div>
        <div className="wrapper__text">
          <p className="wrapper__text--title">
            {title}
          </p>
          <ul className="wrapper__text--list">
            <li className="wrapper__text--list-item">
              <span className="list-item-bold">overview:</span>{overview}
            </li>
            <li className="wrapper__text--list-item">
              <span className="list-item-bold">genres:</span>
              {this.state.genres.map(genre => (
                <Genre
                  genreText={genre.name}
                  key={genre.id} />
              ))}
            </li>
            <li className="wrapper__text--list-item">
              <span className="list-item-bold">popularity:</span>{popularity}
            </li>
            <li className="wrapper__text--list-item">
              <span className="list-item-bold">release_date:</span>{release_date}
            </li>
            <li className="wrapper__text--list-item">
              <span className="list-item-bold">vote_average:</span>{vote_average}
            </li>
            <li className="wrapper__text--list-item">
              <span className="list-item-bold">vote_count:</span>{this.state.vote_count}
            </li>
            <li className="wrapper__text--list-item vote-rating">
              <span className="list-item-bold">vote(rating):</span>
              <input className="input-rating"
               type="number"
                name="rating"
                 id="" min='1'
                  max='10'
                   placeholder='Rating'
                    value={this.state.voteInput}
                    onChange={this.handleChangeVoteRating} />
              <button className="vote-rating-button" onClick={this.addVoteCount}>add vote</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};

export default FilmPage;
FilmPage.displayName = "FilmPage";