import React from 'react';
import Proptypes from 'prop-types';
import './Loader.css';

const Loader = props => (
  <div className="Loader-refresh">
    <h1> Oops ! No books found!</h1>
    <h1> Import them now ?</h1>
    <button><i className="material-icons" onClick={() => props.fetchIntoDb()}>refresh</i></button>
  </div>
);

Loader.propTypes = {
  fetchIntoDb: Proptypes.func.isRequired,
};
export default Loader;
