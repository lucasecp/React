import * as types from '../types';

const initialState = {
  btnClick: false,
};
export default function reducer(state = initialState, action) {
  if (action.type === types.btnClickSuccess) {
    const nstate = { ...state };
    nstate.btnClick = !nstate.btnClick;
    return nstate;
  }
  if (action.type === types.btnClickError) {
    console.log('Error');
    return state;
  }

  if (action.type === types.btnClickRequest) {
    console.log('Fazendo requisição');
    return state;
  }
  return state;
}
