import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/actions/actions';
import Container from '../Container/Container';
import './Board.css';

class Board extends React.Component {
  componentDidMount =() => {
    axios.get('/allbooks').then((results) => {
      this.props.getBooks(results.data);
    });
  }
  render() {
    if (this.props.books === {}) {
      return (<p>hi</p>);
    }
    return (
      <div className="Board-Column">
        <div className="Board-div" />
        <div classNAME="Board-content">
          <h1 className="Board-title">The BookShelf</h1>
          {/* <p>{JSON.stringify(this.props.books)}</p> */}
          <Container
            books={this.props.books}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  books: state.books.books,
});

const mapDispatchToProps = dispatch => ({
  getBooks: books => dispatch(getBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

