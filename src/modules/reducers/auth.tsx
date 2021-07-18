import { AnyAction } from 'redux';

import * as actions from '../actions';
import { initialAuthStateType } from '../types';

const initialAuthState: initialAuthStateType = {
  id: '',
  email: '',
  token: '',
  error: '',
  isLogged: false,
  isRemember: false,
  isLoading: false,
};

const reducer = (
  state = initialAuthState,
  action: AnyAction
): initialAuthStateType => {
  switch (action.type) {
    case actions.FETCH_AUTH_REQUEST: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }
    case actions.FETCH_AUTH_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    }
    case actions.FETCH_AUTH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer, initialAuthState };
