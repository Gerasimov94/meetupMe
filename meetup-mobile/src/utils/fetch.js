import axios from 'axios';

import {BACKEND_URL} from '../common/constants/constants';

export const fetch = axios.create({
	baseURL: BACKEND_URL,
});

export default fetch;
