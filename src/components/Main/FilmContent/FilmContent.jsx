import React from 'react';
import { Component } from 'react';
import './FilmContent.css';
import noImage from './img/noImage.jpg'

class FilmContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  };

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b7250787f519598983a71dd72dba0889&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  componentDidUpdate(prevprops) {
    if (this.props.pageNumber !== prevprops.pageNumber || this.props.sortBy !== prevprops.sortBy) {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b7250787f519598983a71dd72dba0889&language=en-US&sort_by=${this.props.sortBy}&include_adult=false&include_video=false&page=${this.props.pageNumber}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="film-content">
          <ul className="film-content__list">
            {items.map(item => (
              <li
                key={item.id}
                id={item.id}
                className="film-content__list--item">
                <img
                  className="film-image"
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  onError={(e) => {
                    e.target.src = noImage}}
                  alt={`${item.title}`} />
                <p className="film-title">
                  {`${item.title}`}
                </p>
                <div className="film-content__list--item-text">
                  <div>
                    release_date: {`${item.release_date}`}
                  </div>
                  <div>
                    vote_average: {`${item.vote_average}`}
                  </div>
                </div>
                <button
                  className="film-content__list--delete-button"
                  styleName="display: none">
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
  }
}

export default FilmContent;
FilmContent.displayName = "FilmContent";