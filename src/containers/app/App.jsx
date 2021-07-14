import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'normalize.css';

import '../../assets/theme/global.scss';
import App from '../../components/app';

class AppContainer extends PureComponent {
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { questions } = state;
  return {
    questions,
  };
};

AppContainer.defaultProps = {
  questions: null,
};

AppContainer.propTypes = {
  questions: PropTypes.objectOf(PropTypes.string),
};

export default connect(mapStateToProps)(AppContainer);
