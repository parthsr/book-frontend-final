import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Board from './components/Board/Board';
import initStore from './redux/store';

const Complete = () => (
  <Provider store={initStore()}>
    <Board />
  </Provider>
);
const render = () => {
  ReactDOM.render(
    <Complete />,
    document.getElementById('root'),
  );
};


export default render;
