import axios from 'axios';

const initialState = {
  books: {},
  // likeBookid: [],
};
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOKS': {
      const books = action.payload;
      // const bookArrayWithRating = books.reduce((accumulator, book) => {
      //   const tempAcc = accumulator;
      //   (tempAcc[book.Author] = accumulator[book.Author] || []).push(book);
      //   return tempAcc;
      // }, {});
      return ({
        ...state,
        books,
      });
    }
    case 'LIKE_BOOK': {
      const book = action.payload;
      const { bookid } = book;
      if (book.likestatus === 'like') {
        const options = {
          method: 'POST',
          url: `/opinion/${bookid}/dislike`,
        };
        axios(options);
      } else {
        const options = {
          method: 'POST',
          url: `/opinion/${bookid}/like`,
        };
        axios(options);
      }
      return state;
      // if (state.likeBookid.find(id)) {
      //   const index = state.likeBookid.indexOf(id);
      //   return ({
      //     likeBookid: state.likeBookid.splice(index, 1),
      //   });
      // }
      // const likebooks = state.likeBookid.slice();
      // const newLikeBooks = likebooks.push(id);
      // return ({
      //   ...state,
      //   likeBookid: newLikeBooks,
      // });
    }
    default: {
      return state;
    }
  }
};

export default noteReducer;
