import { put, takeEvery } from 'redux-saga/effects';
import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS
} from 'src/redux/reducers/auth';

function* authenticate(action) {
    // console.log(action);
    yield put({ 
        type: SIGN_IN_SUCCESS, 
        payload: { token: 'xxx.yyyy.zzzz' },
    });

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
    yield takeEvery(SIGN_IN_REQUEST, authenticate);
    yield takeEvery(SIGN_OUT_REQUEST, signOut);
}