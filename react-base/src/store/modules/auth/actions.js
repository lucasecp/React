import * as types from '../types';

export function loginSuccess(payload) {
  return {
    type: types.loginSuccess,
    payload,
  };
}
export function loginRequest(payload) {
  return {
    type: types.loginRequest,
    payload,
  };
}
export function loginFalure(payload) {
  return {
    type: types.loginFailure,
    payload,
  };
}
export function registerRequest(payload){
  return {
    type: types.registerRequest,
    payload,
  }
}
export function registerFailure(payload){
  return {
    type: types.registerFailure,
    payload,
  }
}
export function registerCreatedSuccess(payload){
  return {
    type: types.registerCreatedSuccess,
    payload,
  }
}
export function registerUpdatedSuccess(payload){
  return {
    type: types.registerUpdatedSuccess,
    payload,
  }
}