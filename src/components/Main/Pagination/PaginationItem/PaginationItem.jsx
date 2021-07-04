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
      let totalPage = 5;
      let pagePagination = 1;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(totalPage, pagePagination);
    } else if (pagePagination === "Last &gt; &gt;") {
      let totalPage = 5;
      let pagePagination = 10;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(totalPage, pagePagination);
    } else if (pagePagination === "&lt; Prev") {
      let totalPage = 10;
      let pagePagination = props.currentPageNumber - 1;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(totalPage, pagePagination);
    } else if (pagePagination === "Next &gt;") {
      let totalPage = 10;
      let pagePagination = props.currentPageNumber + 1;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(totalPage, pagePagination);
    } else {
      let totalPage = 10;
      props.updatePageNumber(pagePagination);
      props.createPaginationArray(totalPage, pagePagination);
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