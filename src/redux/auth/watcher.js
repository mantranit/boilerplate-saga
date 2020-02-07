import { call, put, takeLatest } from 'redux-saga/effects';
import { apiPost } from 'src/utils/api';
import notify from 'src/utils/notify';
import { types, urls } from './index';

function* authenticate(action) {
    try {
        const response = yield call(apiPost, {
            path: urls.LOGIN,
            payload: action.payload
        });
        if (response.error) {
            yield put({
                type: types.SIGN_IN_FAILURE,
                payload: response,
            });
            notify.error(response.error);
        } else {
            yield put({
                type: types.SIGN_IN_SUCCESS,
                payload: response.data,
            });
        }
    } catch (error) {
        yield put({
            type: types.SIGN_IN_FAILURE,
            payload: error,
        });
        notify.error(error);
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
