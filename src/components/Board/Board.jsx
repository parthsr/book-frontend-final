import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/actions/actions';
import Container from '../Container/Container';
import './Board.css';

const Board = (props) => {
  // componentDidMount =() => {
  //   axios.get('/allbooks').then((results) => {
  //     this.props.getBooks(results.data);
  //   });
  if (Object.keys(props.books).length === 0 && props.books.constructor === Object) {
    axios.get('/allbooks').then((results) => {
      props.getBooks(results.data);
    });
    return (<h1>hi</h1>);
  }
  return (
    <div className="Board-Column">
      <div className="Board-div" />
      <div classNAME="Board-content">
        <h1 className="Board-title">The BookShelf</h1>
        {/* <p>{JSON.stringify(this.props.books)}</p> */}
        <Container
          books={props.books}
        />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  books: state.books.books,
});

const mapDispatchToProps = dispatch => ({
  getBooks: books => dispatch(getBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

