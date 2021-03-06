import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import './Author.css';

const Author = (props) => {
  const keys = Object.keys(props.books);
  const keyValue = [];
  for (let i = 0; i < keys.length; i += 1) {
    const newKeyValue = (<div><p className="Author-name">{(keys[i])}</p><Container books={props.books[keys[i]]} /></div>);
    keyValue.push(newKeyValue);
  }
  return (
    <div>
      { keyValue }
    </div>
  );
};
Author.propTypes = {
  books: PropTypes.string.isRequired,
};
export default Author;
