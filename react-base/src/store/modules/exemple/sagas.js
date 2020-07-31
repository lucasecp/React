import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((res) => {
    setTimeout(() => {
      res('Promise resolved');
    }, 4000);
  });

function* exempleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clickBtnSuccess());
  } catch {
    yield put(actions.clickBtnError());
  }
}
export default all([takeLatest(types.btnClickRequest, exempleRequest)]);
