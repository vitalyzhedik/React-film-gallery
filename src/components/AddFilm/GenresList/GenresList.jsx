import React from 'react';
import './GenresList.css';

const GenresList = (props) => {
  return (
    <option>
      {props.name}
    </option>
  )
};

export default GenresList;
GenresList.displayName = "GenresList";