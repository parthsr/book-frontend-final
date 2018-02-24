import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/actions/actions';
import Author from '../Author/Author';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import Loader from '../Loader/Loader';
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData();
    Board.propTypes = {
      getBooks: PropTypes.func.isRequired,
      books: PropTypes.string.isRequired,
    };
  }
  fetchData = () => {
    axios.get('/allbooks').then((results) => {
      this.props.getBooks(results.data);
    });
  }

  fetchIntoDb=() => {
    const options = {
      url: '/store',
      method: 'POST',
    };
    axios(options).then(() => this.fetchData());
  }
  render = () => {
    if (Object.keys(this.props.books).length === 0) {
      return (
        <div className="Board-Column">
          <SideNav />
          <div className="Board-content">
            <Header />
            <Loader fetchIntoDb={this.fetchIntoDb} />
          </div>
        </div>
      );
    }
    return (
      <div className="Board-Column">
        <SideNav />
        <div className="Board-content">
          <Header />
          <Author books={this.props.books} />
        </div>
      </div>
    );
  };
}
const mapStateToProps = state => ({
  books: state.books.books,
});

const mapDispatchToProps = dispatch => ({
  getBooks: books => dispatch(getBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

