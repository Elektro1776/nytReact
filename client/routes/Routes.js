
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import * as RouteMap from './static';
import AppContainer from '../containers/AppContainer';
import Header from '../components/Header';
class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { location } = this.props;
    return (
      <AppContainer>
        <div>
          <Header />
          <Route location={location} exact path="/" component={RouteMap.Main} />
          <Route location={location} path="/saved_articles" component={RouteMap.SavedArticles} />

        </div>
      </AppContainer>

    );
  }
}


Routes.propTypes = {
  location: PropTypes.object.isRequired,
};
export default Routes;
