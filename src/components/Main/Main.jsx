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

  render() {
    return (
      <main className="main">
      <div className="main-content">
        <Select sorting={this.updateSorting}/>
        <FilmContent pageNumber={this.state.page} sortBy={this.state.sorting}/>
        <Pagination updatePageNumber={this.updatePageNumber}/>
      </div>
    </main >
    )
  };
};

export default Main;
Main.displayName = "Main";