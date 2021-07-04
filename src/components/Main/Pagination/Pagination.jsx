import React from 'react';
import './Pagination.css';
import { Component } from 'react';

class Pagination extends Component {

  paginationClick = (event) => {
    let pagePagination = event.target.innerHTML.trim();
    this.props.updatePageNumber(pagePagination);
  }

  render() {
    return (
      <div className="page-content">
        <ul className="page-content-list" >
          <li className="page-content-list__item">
            <button
              className="page-number-button"
              onClick={this.paginationClick}>
              1
            </button>
          </li>
          <li className="page-content-list__item">
            <button
              className="page-number-button"
              onClick={this.paginationClick}>
              2
            </button>
          </li>
          <li className="page-content-list__item">
            <button className="page-number-button"
               onClick={this.paginationClick}>
              3
            </button>
          </li>
          <li className="page-content-list__item">
            <button className="page-text-button next-button"
              onClick={this.paginationClick}>
              {'Next >'}
            </button>
          </li>
          <li className="page-content-list__item">
            <button className="page-text-button last-button"
              onClick={this.paginationClick}>
              {'Last > >'}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
Pagination.displayName = "Pagination";