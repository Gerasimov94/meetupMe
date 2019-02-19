import {makeRequest} from '../../../utils/fetch';

export const fetchMeetups = async () => {
	try {
		return await makeRequest('/meetups', 'GET');
	} catch (error) {
		throw new Error(error);
	}
};
