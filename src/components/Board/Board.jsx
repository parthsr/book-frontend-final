import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/actions/actions';
import Container from '../Container/Container';

class Board extends React.Component {
  componentDidMount =() => {
    axios.get('/allbooks').then((results) => {
      this.props.getBooks(results.data);
    });
  }
  onClick = () => {
    axios({
      method: 'POST',
      url: '/allbooks',
      data: this.props.books,
    }).then(response => console.log(response.data));
  }
  render() {
    if (this.props.books === {}) {
      return (<p>hi</p>);
    }
    return (
      <div>
        <p>{JSON.stringify(this.props.books)}</p>
        <button onClick={() => this.onClick()}>lol</button>
        <Container books={this.props.books} />
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

