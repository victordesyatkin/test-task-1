import { ActionCreator, Dispatch } from 'redux';

import { getEndpoints } from '../../helpers';
import { fetchRequest, fetchSuccess, fetchFailure } from './common';
import { ActionCreatorType, ActionType, AuthType } from '../types';

const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
const fetchAuthRequest: ActionCreatorType = () => ({
  type: FETCH_AUTH_REQUEST,
});

const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
const fetchAuthSuccess: ActionCreator<ActionType & { payload: AuthType }> = (
  payload
) => ({
  type: FETCH_AUTH_SUCCESS,
  payload,
});

const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';
const fetchAuthFailure: ActionCreator<ActionType & { payload: Error }> = (
  payload
) => ({
  type: FETCH_AUTH_SUCCESS,
  payload,
});

const endpoints = getEndpoints();

const fetchAuth =
  (auth: { email: string; isRemember: boolean }) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(fetchRequest());
    try {
      const response = await fetch(endpoints.FETCH_AUTH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(auth),
      });
      if (!response.ok) {
        const error = new Error(response.statusText);
        dispatch(fetchFailure(error));
      }
      const payload = await response.json();
      dispatch(fetchSuccess());
      fetchAuthSuccess(payload);
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };

export {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
  fetchAuth,
};
