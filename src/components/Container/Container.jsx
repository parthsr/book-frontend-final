import React from 'react';
import Card from '../Card/Card';

const Container = (props) => {
  const { books } = props;
  console.log(books);
  const contentToDisplay = [];
  for (let i = 0; i < books.length; i += 1) {
    const newcontentToDisplay =
     (<div>
       <Card book={books[i]} />
      </div>);
    contentToDisplay.push(newcontentToDisplay);
  }
  return (
    <div>
      {contentToDisplay}
    </div>
  );
};

export default Container;
