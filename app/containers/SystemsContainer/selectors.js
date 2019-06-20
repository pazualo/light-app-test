import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the systemsContainer state domain
 */

const selectSystemsContainerDomain = state =>
  state.systemsContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SystemsContainer
 */

const makeSelectSystemsContainer = () =>
  createSelector(
    selectSystemsContainerDomain,
    substate => substate,
  );

export default makeSelectSystemsContainer;
export { selectSystemsContainerDomain };
