/* eslint-disable @typescript-eslint/no-explicit-any */
import Message from '@/components/Message/Message';
import Axios from 'axios';

let baseURL = process.env.NEXT_PUBLIC_API_URL;

type HTTP_METHOD = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
// console.log("HOST", REACT_APP_SERVER_HOST);

interface requestObjInterface {
	path?: string;
	method: HTTP_METHOD;
	data?: any;
	contentType?: string;
	responseType?: string;
	version?: string;
	custormBaseURL?: string;
}

const AxiosCall = async (requestObj: requestObjInterface) => {
	const {
		path,
		method,
		data,
		contentType = 'application/json',
		responseType = 'application/json',
		version = '',
		custormBaseURL = null,
	} = requestObj;
	const token = localStorage.getItem('authToken');

	const headers = {
		'Content-Type': contentType,
		'Response-Type': responseType,
		'Authorization': 'Bearer ' + token,
		'crossDomain': true,
	};

	baseURL = process.env.NEXT_PUBLIC_API_URL;

	let url = version ? `${baseURL}${version}/${path}` : `${baseURL}${path}`;

	// console.log("url: ", url);

	if (custormBaseURL != null) {
		url = custormBaseURL;
	}
	try {
		const response = await Axios({
			method,
			url,
			data,
			headers,
			json: true,
		} as any);
		const result = response && response.data;

		return result;
	} catch (error: any) {
		// console.log(error);
		if (error.response?.status === 401) {
			localStorage.setItem('authToken', '');

			const currentPath = window.location.href
				.replace(window.location.host, '')
				.replace(window.location.protocol + '//', '');
			const urlEncoded = encodeURIComponent(currentPath);
			window.location.href = `/signin/?redirect=${urlEncoded}`;
		}
		Message.error(error?.response?.data.message);
		throw error;
	}
};

export default AxiosCall;
