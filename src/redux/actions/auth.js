import {
    SIGN_IN_REQUEST,
    SIGN_OUT_REQUEST
} from 'src/redux/reducers/auth';

export const signIn = (payload) => ({
    type: SIGN_IN_REQUEST,
    payload,
});
export const signOut = () => ({
    type: SIGN_OUT_REQUEST,
});