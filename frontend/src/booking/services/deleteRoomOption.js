import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const deleteRoomOption = ({ id }) => {

	const { getToken } = tokenManager();
	const token = getToken();

	return axios.delete(`${environment.rootApi}/call/roomoption/delete`,
		{
			params: { token, id },
			headers: {
				'Authorization': token,
			}
		})
}

export default deleteRoomOption
