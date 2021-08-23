import { handleResponse, API, getToken } from './utils';

const profile = {
    getUserDetails: async (user_id) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/profile/get-user-details`,
                {
                    params: {
                        user_id: user_id
                    },
                    'headers': { 'Authorization': 'Bearer: ' + token }
                }
            )
        }
        catch (e) {
            response = e
        }

        return handleResponse(response);
    },
    updateProfileDetails: async (body,dp) => {
        let response = null
        const token = await getToken()
        const data = new FormData();
		try{
            if(dp)
                data.append('profile_picture', {
                    uri: dp.uri, name: 'photo.jpg', type: 'image/jpg'
                });
            
            Object.keys(body).forEach(key => {
                if(body[key])
                    data.append(key, body[key]);
            });

            await API.post('/profile/update-profile-details', data,{
                'Content-Type': 'multipart/form-data',
                'headers': { 'Authorization': 'Bearer: ' + token }
            })
            .then(function (res) {
                response = res
            })
            .catch(function (error) {
                response = error
            })
		}
		catch(e){
			response = e
		}
        return handleResponse(response);
    },
    getUserCrushAndMatchcount: async (user_id) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/profile/get-user-crush-and-match-count`,
                {
                    'headers': { 'Authorization': 'Bearer: ' + token }
                }
            )
        }
        catch (e) {
            response = e
        }

        return handleResponse(response);
    },
    getUserCrushAndMatchList: async ({type,page}) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/profile/get-user-crush-and-match-list`,
                {
                    params: {
                        type,
                        page
                    },
                    'headers': { 'Authorization': 'Bearer: ' + token }
                }
            )
        }
        catch (e) {
            response = e
        }

        return handleResponse(response);
    },
    sendCrush: async (user_id) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.post(`/profile/send-crush`,
            { receiver_id: user_id },
            { 'headers': { 'Authorization': 'Bearer: ' + token } }
            )
        }
        catch (e) {
            response = e
        }

        return handleResponse(response);
    }
}

export default profile