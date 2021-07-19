import React from 'react';
import './PaginationItem.css';

const PaginationItem = (props) => {
/* 
  let activePage = '';
  if (props.innerText === props.currentPageNumber) {
    let activePage = 'active';
    console.log('active');
  } else {
    let activePage = '';
  }; */

let paginationClick = (event) => {
    let pagePagination = event.target.innerHTML.trim();

    if (pagePagination === "&lt; &lt; First") {
      let showPages = 5;
      let pagePagination = 1;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(showPages, pagePagination);
    } else if (pagePagination === "Last &gt; &gt;") {
      let showPages = 5;
      let pagePagination = 10;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(showPages, pagePagination);
    } else if (pagePagination === "&lt; Prev") {
      let showPages = 10;
      let pagePagination = props.currentPageNumber - 1;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(showPages, pagePagination);
    } else if (pagePagination === "Next &gt;") {
      let showPages = 10;
      let pagePagination = props.currentPageNumber + 1;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(showPages, pagePagination);
    } else {
      let showPages = 10;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(showPages, pagePagination);
    };
  };

  return (
    <li className="page-content-list__item">
      <button className={`${props.class}`}
        onClick={paginationClick}>
        {props.innerText}
      </button>
    </li>
  )
}

export default PaginationItem;
PaginationItem.displayName = "PaginationItem";