export const login = (payload) => {
    const { username, password } = payload;

    return (dispatch) => {
        return dispatch({
            type: 'SIGNIN_SUCCESS',
            payload: {
                token: 'xxx.yyy.zzz',
            },
        })
    }
};
