import axios from 'axios';

const initialState = {
  books: {},
};
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOKS': {
      const book = action.payload;
      return ({
        ...state,
        books: book,
      });
    }
    default: {
      return state;
    }
  }
};

export default noteReducer;
