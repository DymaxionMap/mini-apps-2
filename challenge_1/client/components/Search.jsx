import React from 'react';

const Search = ({ handleQueryChange, getEvents }) => (
  <div>
    <label htmlFor="search">
      Search
      <input id="search" type="text" onChange={handleQueryChange} />
    </label>
    <button type="button" onClick={getEvents}>Submit</button>
  </div>
);

export default Search;
