import * as types from './index';

export const signIn = (payload) => ({
    type: types.SIGN_IN_REQUEST,
    payload,
});
export const signOut = () => ({
    type: types.SIGN_OUT_REQUEST,
});
