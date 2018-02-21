const GET_BOOKS = 'GET_BOOKS';
const LIKE_BOOK = 'LIKE_BOOK';

export const getBooks = payload => ({
  type: GET_BOOKS,
  payload,
});

export const likeBook = payload => ({
  type: LIKE_BOOK,
  payload,
});
