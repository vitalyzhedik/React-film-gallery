import React from 'react';
import { Component } from 'react';
import './Main.css';
import FilmContent from './FilmContent/FilmContent';
import Select from './Select/Select';
import Pagination from './Pagination/Pagination';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      sorting: "popularity.desc",
    };
  }

  updatePageNumber = (pageNumber) => {
    this.setState({
      page: pageNumber
    });
  };

  updateSorting = (sort) => {
    this.setState({
      sorting: sort
    });
  };

  componentDidMount () {
    const signInButton = document.querySelector('.header-content__sign-button');
    signInButton.style.display = 'block';
  }

  render() {
    return (
      <main className="main">
      <div className="main-content">
        <Select sorting={this.updateSorting} userData={this.props.userData}/>
        <FilmContent 
        pageNumber={this.state.page} 
        sortBy={this.state.sorting}
        getFilmData={this.props.getFilmData}
        userData={this.props.userData}
        getNewFilmData={this.props.getNewFilmData}
        newFilmData={this.props.newFilmData}
        filmIdForDelete={this.props.filmIdForDelete}
        />
        <Pagination updatePageNumber={this.updatePageNumber}/>
      </div>
    </main >
    )
  };
};

export default Main;
Main.displayName = "Main";