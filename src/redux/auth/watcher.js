import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './index';
import { apiGet, apiPost } from 'src/utils/api';

function* authenticate(action) {
    try {
        const response = yield call(apiPost, {
            path: 'companyAdmin/login',
            payload: action.payload
        });
        if (response.error) {
            yield put({
                type: types.SIGN_IN_FAILURE,
                payload: response,
            });
        } else {
            yield put({
                type: types.SIGN_IN_SUCCESS,
                payload: response,
            });
        }
    } catch (error) {
        yield put({
            type: types.SIGN_IN_FAILURE,
            payload: error,
        });
    }
}
function* signOut() {
    yield put({
        type: types.SIGN_OUT_SUCCESS,
    });
}
export default function* authWatcher() {
    yield takeLatest(types.SIGN_IN_REQUEST, authenticate);
    yield takeLatest(types.SIGN_OUT_REQUEST, signOut);
}
