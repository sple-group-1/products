import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const updateEvent = (data = {}) => {
	let body = data;
	const formData = new FormData();
	  Object.entries(data).forEach(([key, value]) => {
    if (key === 'imageUrls') {
      if (value instanceof File) {
        formData.append('imageUrls', value);
      }
    } else {
      formData.append(key, value);
    }
  });

	const { getToken } = tokenManager();
	const token = getToken();
	
	return axios.put(`${environment.rootApi}/call/event/update`, formData,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default updateEvent
