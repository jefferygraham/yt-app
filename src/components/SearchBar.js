import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div className='ui segment search-bar'>
      <form className='ui form' onSubmit={onSubmit}>
        <div className='field'>
          <label>Video Search:</label>
          <input
            type='text'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
