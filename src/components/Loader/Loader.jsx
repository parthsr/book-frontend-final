import React from 'react';
import Proptypes from 'prop-types';
import './Loader.css';

const Loader = props => (
  <div className="Loader-refresh">
    <h1> OOPS ! No books found!</h1>
    <h1> Import them Now ?</h1>
    <p><i className="material-icons" onClick={() => props.fetchIntoDb()}>refresh</i></p>
  </div>
);

Loader.propTypes = {
  fetchIntoDb: Proptypes.func.isRequired,
};
export default Loader;
