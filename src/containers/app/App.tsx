import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import 'normalize.css';

import '../../assets/theme/global.scss';
import { AuthType, initialStateType } from '../../modules/types';
import App from '../../components/app';

class AppContainer extends PureComponent<{ auth: AuthType }> {
  render() {
    return <App {...this.props} />;
  }
}

function mapStateToProps(state: initialStateType) {
  const { auth } = state;
  return {
    auth,
  };
}

export default connect(mapStateToProps)(AppContainer);
