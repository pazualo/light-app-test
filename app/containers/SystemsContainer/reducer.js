/*
 *
 * SystemsContainer reducer
 *
 */
import produce from 'immer';
import { FETCH_SYSTEMS_DATA_SUCCEED } from './constants';

export const initialState = {
  systems: [],
};

/* eslint-disable default-case, no-param-reassign */
const systemsContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_SYSTEMS_DATA_SUCCEED:
        draft.systems = action.systems;
        break;
      default:
        return state;
    }
  });

export default systemsContainerReducer;
