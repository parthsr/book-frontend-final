import React from 'react';
import Card from '../Card/Card';
import './Container.css';

const Container = (props) => {
  const { books } = props;
  console.log(books);
  const contentToDisplay = [];
  for (let i = 0; i < books.length; i += 1) {
    const newcontentToDisplay =
     (<div key={new Date() + i}>
       <Card
         book={books[i]}
       />
      </div>);
    contentToDisplay.push(newcontentToDisplay);
  }
  return (
    <div className="Container">
      {contentToDisplay}
    </div>
  );
};

export default Container;
