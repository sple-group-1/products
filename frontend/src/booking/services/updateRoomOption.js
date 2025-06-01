import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const updateRoomOption = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();

	return axios.put(`${environment.rootApi}/call/roomoption/update`, body,
		{
			params: { token },

			headers: {
				'Authorization': token,

			}
		})
}

export default updateRoomOption
