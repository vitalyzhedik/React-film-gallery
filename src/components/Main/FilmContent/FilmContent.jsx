import React from 'react';
import { Component } from 'react';
import FilmCard from './FilmCard/FilmCard';
import './FilmContent.css';

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
            {items.map(film => (
              <FilmCard 
              film={film}
              key={film.id}
              getFilmData={this.props.getFilmData}
              />
            ))}
          </ul>
        </div>
      );
    };
  }
}

export default FilmContent;
FilmContent.displayName = "FilmContent";