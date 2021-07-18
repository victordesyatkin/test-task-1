import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';
import { reducer as commonReducer } from './common';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});

export default rootReducer;
