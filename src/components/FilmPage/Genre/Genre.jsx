import React from 'react';
import './Genre.css';

const Genre = (props) => {
  return (
    <div>
      {props.genreText}
    </div>
  )
};

export default Genre;
Genre.displayName = "Genre";