import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Card.css';
import { likeBook } from '../../redux/actions/actions';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: this.props.book.likestatus,
    };
    Card.propTypes = {
      book: PropTypes.string.isRequired,
      likeABook: PropTypes.func.isRequired,
    };
  }
  liking=() => {
    if (this.state.like === 'like') {
      this.setState({
        like: 'dislike',
      });
    } else {
      this.setState({
        like: 'like',
      });
    }
    this.props.likeABook(this.props.book);
  }
  render() {
    return (
      <div className="Card">
        <div className="Card-img" />
        <div className="Card-content">
          <div className={this.state.like === 'like' ? 'Card-icon-Holder-like' : 'Card-icon-Holder-unlike'}>
            <div
              className="Card-icon"
              onClick={() => this.liking()}
            >
              <i className="material-icons">favorite</i>
            </div>
          </div>

          <p className="Card-cardName">{this.props.book.name}</p>
          <p className="Card-rating">{this.props.book.rating}</p>
          <p className="Card-footer">{this.props.book.author}</p>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  likeABook: book => dispatch(likeBook(book)),
});

export default connect(null, mapDispatchToProps)(Card);

