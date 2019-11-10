import { all } from 'redux-saga/effects';
import authWatcher from './auth/watcher';

export default function* rootSaga() {
    yield all([
        authWatcher(),
    ]);
}
