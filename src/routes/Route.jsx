import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

const RouteWrapper = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;