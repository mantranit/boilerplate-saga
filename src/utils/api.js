import AuthStorage from 'src/utils/authStorage';

export const getEndpoint = (path) => {
    return process.env.REACT_APP_API_ENDPOINT + path;
};

export const getHeader = () => {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('x-api-key', 'DDvnN3iz5Q9E58abJ5AqOx4hHI8zswRO02LO8Nf0');
    if (AuthStorage.getAccessToken()) {
        header.append('token', AuthStorage.getAccessToken());
    }
    return header;
};

export const apiMethod = ({path, payload, method = 'GET'}) => {
    const parameters = {
        method,
        headers: getHeader(),
    };
    if (payload && typeof payload === 'object') {
        if (payload.token) {
            parameters.headers.set('token', payload.token);
            delete payload.token;
		}
		
		const listKeys = Object.keys(payload);
		for(let i = 0; i < listKeys.length; i++) {
			if (path.includes(`:${listKeys[i]}`)) {
				path = path.replace(`:${listKeys[i]}`, payload[listKeys[i]]);
				delete payload[listKeys[i]];
			}
		}
		if (listKeys.length > 0) {
			if (method === 'GET') {
				const query = new URLSearchParams(payload).toString();
				path = `${path}?${query}`;
			} else {
				parameters.body = JSON.stringify(payload);
			}
		}
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
