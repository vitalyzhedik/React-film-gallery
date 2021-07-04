import React from 'react';
import './Pagination.css';
import { Component } from 'react';
import PaginationItem from './PaginationItem/PaginationItem';

class Pagination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPage: 5,
      pageNumber: 1,
      paginationList: [
        "< < First",
        "< Prev",
        "1", "2", "3"
      ],
    };
  };

  createPaginationArray = (totalPages, page) => {
    if (page === 1 || 10) {
      this.setState({
        totalPage: 5,
      });
    } else if (page === 2 || 9) {
      this.setState({
        totalPage: 8,
      });
    } else {
      this.setState({
        totalPage: 9,
      });
    }

    const beforePages = page - 2;
    const afterPages = page + 2;
    let paginationArray = [];

    if (this.state.pageNumber > 1) {
      paginationArray.push("< < First", "< Prev");
    };
    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
      if (pageLength > totalPages) {
        continue;
      }
      if (pageLength < 1) {
        continue;
      }
      paginationArray.push(pageLength);
    };
    if (page < totalPages) {
      paginationArray.push("Next >", "Last > >")
    }
    this.setState({
      pageNumber: page,
      paginationList: paginationArray,
    });
  };

  renderPagination = () => {
    let finalPaginationList = this.state.paginationList.map((page) => {
      return (
        <PaginationItem
          updatePageNumber={this.props.updatePageNumber}
          createPaginationArray={this.createPaginationArray}
          innerText={page}
          currentPageNumber={this.state.pageNumber}
          totalPage={this.state.totalPage}
          class="page-number-button"
          key={page} />
      )
    });
    return finalPaginationList;
  };

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <div className="page-content">
        <ul className="page-content-list" >
          {this.renderPagination()}
        </ul>
      </div>
    );
  }
}

export default Pagination;
Pagination.displayName = "Pagination";