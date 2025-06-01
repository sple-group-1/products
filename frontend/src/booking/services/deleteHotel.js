import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const deleteHotel = ({id}) => {
	const { getToken } = tokenManager();
	const token = getToken();
	return axios.delete(`${environment.rootApi}/call/hotel/delete`, 
	{
		params: { token, id },
		headers: {
			'Authorization': token,
		}
	})} 

export default deleteHotel
