import React from 'react';
import img from './image.jpg';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <img src={img} />
        <p>{this.props.book.name}</p>
        <h1>Rating</h1>a
        <p>{this.props.book.author}</p>
      </div>
    );
  }
}

export default Card;
