import * as actions from '../actions';

const fetchComponentHidden = (store) => (next) => (action) => {
  const { type } = action;
  if (type === actions.FETCH_COMPONENT_HIDDEN) {
    const { getState, dispatch } = store;
    const { flag } = getState();
    if (flag) {
      fetch('qwerty').then(() => {
        dispatch(actions.updateComponentHidden(true));
      });
    }
  }
  next(action);
};

const logger = (store) => (next) => (action) => {
  console.log('logger state before dispatch action', store.getState());
  const result = next(action);
  console.log('logger state after dispatch action', store.getState());
  return result;
};

export { fetchComponentHidden, logger };
