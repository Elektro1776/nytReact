
import React from 'react';
import { PropTypes } from 'prop-types';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Routes from '../routes/Routes';

const ConnectedContainer = ({ history }) => (
  <Router history={history} >
    <Route render={({ location }) => (<Routes location={location} />)} />
  </Router>
);
ConnectedContainer.propTypes = {
  history: PropTypes.object.isRequired,
};
export default ConnectedContainer;
