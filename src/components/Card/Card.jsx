import React from 'react';
import img from './image.jpg';
import { connect } from 'react-redux';
import './Card.css';
import { likeBook } from '../../redux/actions/actions';

class Card extends React.Component {
  liking=() => {
    // if (this.style.color === 'rgb(255, 0, 0)') {
    //   this.style.color = 'rgb(0,0,0)';
    // } else {
    //   this.style.color = '';
    // }
    this.props.likeABook(this.props.book);
  }
  render() {
    return (
      <div className="Card">
        <img className="Card-img" src={img} alt="picture" />
        <button
          className={this.props.book.likestatus === 'like' ? 'Card-like' : 'Card-unlike'}
          onClick={() => this.liking()}
        >like
        </button>
        <p className="CardName">{this.props.book.name}</p>
        <h1>{this.props.book.rating}</h1>
        <p className="Card-footer">{this.props.book.author}</p>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  likeABook: book => dispatch(likeBook(book)),
});

export default connect(null, mapDispatchToProps)(Card);

