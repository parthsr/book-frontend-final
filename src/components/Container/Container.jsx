import React from 'react';
import Proptypes from 'prop-types';
import Card from '../Card/Card';
import './Container.css';

const Container = (props) => {
  const { books } = props;
  const contentToDisplay = [];
  for (let i = 0; i < books.length; i += 1) {
    const newcontentToDisplay =
     (<div className="Container-card"key={new Date() + i}><Card book={books[i]} /></div>);
    contentToDisplay.push(newcontentToDisplay);
  }
  return (
    <div className="Container">
      {contentToDisplay}
    </div>
  );
};
Container.propTypes = {
  books: Proptypes.string.isRequired,
};
export default Container;
