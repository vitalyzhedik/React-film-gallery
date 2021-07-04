import React from 'react';
import './Select.css';

const Select = () => {
  return (
    <div className="main-select-wrapper">
      <select className="main-select">
        <option value="none">none</option>
        <option value="by_rating_first">by rating (first)</option>
        <option value="by_rating_last">by rating (last)</option>
        <option value="by_release_date_first">by release date (first)</option>
        <option value="by_release_date_last">by release date (last)</option>
      </select>
      <a className="add-film-link" href="./addFilm.html">
        <svg class="add-film-link--img" id="Layer_1" styleName="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" type="text/css">
          <circle class="st0" cx="64" cy="64" r="64" /><path class="st1" d="M103,57H71V25c0-0.6-0.4-1-1-1H58c-0.6,0-1,0.4-1,1v32H25c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h32v32  c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V71h32c0.6,0,1-0.4,1-1V58C104,57.4,103.6,57,103,57z" /></svg>
      </a>
    </div>
  )
};

export default Select;
Select.displayName = "Select";