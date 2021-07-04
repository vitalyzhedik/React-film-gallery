import React from 'react';
import { Component } from 'react';
import './Main.css';
import FilmContent from './FilmContent/FilmContent';
import Select from './Select/Select';
import Pagination from './Pagination/Pagination';

class Main extends Component {

  updatePageNumber = () => {

  };

  render() {
    return (
      <main className="main">
      <div className="main-content">
        <Select />
        <FilmContent />
        <Pagination />
      </div>
    </main >
    )
  };
};

export default Main;
Main.displayName = "Main";