import makeRequest from '../../../utils/fetch';

export const fetchMeetups = async () => {
	try {
		return await makeRequest.get('/meetups');
	} catch (error) {
		throw new Error(error);
	}
};
