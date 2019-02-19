import {BACKEND_URL} from '../common/constants/constants';

export const makeRequest = async (url, method, params = {}) => {
	try {
		const responsePromise = await fetch(`${BACKEND_URL}${url}`,
			method === 'GET'
				? {method}
				: {
					method,
					body: JSON.stringify(params),
					headers: {
						'Content-Type': 'application/json',
					},
				});

		return responsePromise.json();
	} catch (error) {
		throw error;
	}
};
