import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  loading: false,
};
export default function reducer(state = initialState, action) {
  if (action.type === types.loginSuccess) {
    const newState = { ...initialState };
    newState.isLoggedIn = true;
    newState.token = action.payload.token;
    newState.user = action.payload.user;
    return newState;
  }
  if (action.type === types.loginFailure) {
    delete axios.defaults.headers.Authorization;
    const newState = { ...initialState };
    return newState;
  }
  if (action.type === types.loginRequest) {

    const newState = { ...state };
    newState.loading = true;
    return newState;
  }
  if (action.type === types.registerUpdatedSuccess) {
    const newState = { ...state };
    newState.user.name = action.payload.nome
    newState.user.email = action.payload.email
    newState.loading = false;
    return newState;
  }
  if (action.type === types.registerCreatedSuccess) {
    const newState = { ...state };
    newState.loading = false;
    return newState;
  }

  if (action.type === types.registerRequest) {
    const newState = { ...state };
    newState.loading = true;
    return newState;
  }
  if (action.type === types.registerFailure) {
    const newState = { ...state };
    newState.loading = false;
    return newState;
  }

  return state;
}
