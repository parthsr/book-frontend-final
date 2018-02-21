import React from 'react';
import img from './image.jpg';
import { connect } from 'react-redux';
import './Card.css';
import { likeBook } from '../../redux/actions/actions';

const Card = props => (
  <div className="Card">
    <img className="Card-img"src={img} />
    <button
      className={props.book.likestatus === 'like' ? 'Card-like' : 'Card-unlike'}
      onClick={props.likeABook(props.book)}
    >like
    </button>
    <p className="CardName">{props.book.name}</p>
    <h1>{props.book.rating}</h1>
    <p className="Card-footer">{props.book.author}</p>
  </div>
);


const mapDispatchToProps = dispatch => ({
  likeABook: book => dispatch(likeBook(book)),
});

export default connect(null, mapDispatchToProps)(Card);

