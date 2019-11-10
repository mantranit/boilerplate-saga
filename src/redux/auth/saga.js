import { put, takeLatest } from 'redux-saga/effects';
import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS
} from './reducer';

function* authenticate(action) {
    // console.log(action);
    // yield put({
    //     type: SIGN_IN_SUCCESS,
    //     payload: { token: 'xxx.yyyy.zzzz' },
    // });

    yield put({
        type: SIGN_IN_FAILURE,
        payload: { error: 'Sign In Failure' },
    });
}
function* signOut() {
    yield put({
        type: SIGN_OUT_SUCCESS,
    });
}
export default function* actionWatcher() {
    yield takeLatest(SIGN_IN_REQUEST, authenticate);
    yield takeLatest(SIGN_OUT_REQUEST, signOut);
}
