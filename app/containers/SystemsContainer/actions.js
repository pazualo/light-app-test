/*
 *
 * SystemsContainer actions
 *
 */

import {
  FETCH_SYSTEMS_DATA_SUCCEED,
  FETCH_SYSTEMS_DATA_FAILED,
  FETCH_SYSTEMS_DATA,
} from './constants';

export function requestSystemsData() {
  return {
    type: FETCH_SYSTEMS_DATA,
  };
}

export function requestSystemsDataSucceeded(systems) {
  return {
    type: FETCH_SYSTEMS_DATA_SUCCEED,
    systems,
  };
}
export function requestSystemsDataFailed(message) {
  return {
    type: FETCH_SYSTEMS_DATA_FAILED,
    message,
  };
}
