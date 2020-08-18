import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* authRequest({ payload }) {
  try {
    const res = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...res.data }));
    toast.success('Login feito com sucesso');

    axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
    history.push(payload.prevPath);
  } catch (erro) {
    toast.error('Usuário ou senha inválida');
    yield put(actions.loginFalure());
  }
}
function persistReyhydrate({ payload }) {
  const { token } = payload.auth;
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
  try {
    if (id) {
      yield call(axios.put, '/users', {
        nome,
        email,
        password: password || undefined,
      });
      toast.success('Editado com sucesso');
      yield put(actions.registerUpdatedSuccess({ id, nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        nome,
        email,
        password,
      });
      toast.success('Criado com sucesso');
      yield put(actions.registerCreatedSuccess());
      history.push('/login');
    }
  } catch (err) {
    const errors = get(err, 'response.data.errors', []);
    const status = get(err, 'response.status', []);
    if (status === 401) {
      toast.warning('Você precisa fazer login');
      yield put(actions.registerFailure());
      return history.push('/login');
    }
    if (errors.length > 0) {
      errors.map((e) => toast.error(e));
    } else toast.error('Erro desconhecido');

    yield put(actions.registerFailure());
  }
}
export default all([
  takeLatest(types.loginRequest, authRequest),
  takeLatest(types.persistReyHydrate, persistReyhydrate),
  takeLatest(types.registerRequest, registerRequest),
]);
