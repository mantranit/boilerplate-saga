import AuthStorage from 'src/utils/authStorage';

const ENDPOINT = 'https://o86a2uajrd.execute-api.us-east-1.amazonaws.com/dev/';

export const getEndpoint = (path) => {
    return ENDPOINT + path;
};

export const getHeader = () => {
    const header = {
        'Content-Type': 'application/json',
        'x-api-key': 'DDvnN3iz5Q9E58abJ5AqOx4hHI8zswRO02LO8Nf0',
    };
    if (AuthStorage.getAccessToken()) {
        header.token = AuthStorage.getAccessToken();
    }
    return header;
};

export const apiMethod = ({path, payload, method = 'GET'}) => {
    const parameters = {
        method,
        headers: getHeader(),
    };
    if (payload && typeof payload === 'object') {
        parameters.body = JSON.stringify(payload);
    }

    return fetch(getEndpoint(path), parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};

export const apiGet = ({path, payload}) => {
    return apiMethod({path, payload, method: 'GET'});
};

export const apiPost = ({path, payload}) => {
    return apiMethod({path, payload, method: 'POST'});
};
