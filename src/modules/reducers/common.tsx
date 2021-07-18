import { AnyAction } from 'redux';

import * as actions from '../actions/common';
import { initialCommonStateType } from '../types';

const initialCommonState: initialCommonStateType = {
  error: '',
  isLoading: false,
};

const reducer = (
  state: initialCommonStateType = initialCommonState,
  action: AnyAction
): initialCommonStateType => {
  switch (action.type) {
    case actions.FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actions.FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case actions.REMOVE_ERROR: {
      return {
        ...state,
        error: '',
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer, initialCommonState };
