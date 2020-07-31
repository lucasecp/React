import * as types from '../types';

export function clickBtnSuccess() {
  return {
    type: types.btnClickSuccess,
  };
}
export function clickBtnRequest() {
  return {
    type: types.btnClickRequest,
  };
}
export function clickBtnError() {
  return {
    type: types.btnClickError,
  };
}
