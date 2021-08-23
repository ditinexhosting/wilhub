import { handleResponse, API, getToken } from './utils';

const chat = {
    getChatList : async (page=1) => {
        let response = null
        //response = MOCK.getChatList
        const token = await getToken()
        try {
            response = await API.get(`/chat/get-chat-list`,
                {
                    params:{
                        page: page
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
    getMessageRequestsList: async (page=1) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/chat/get-message-request-list`,
                {
                    params:{
                        page: page
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
    getNoOfMessageRequest : async () => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/chat/get-message-request-count`,
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
    uploadChatImage : async (image) => {
        let response = null
        const token = await getToken()
		const data = new FormData();
		try{
            data.append('chat_image', {
                uri: image.path, name: 'photo.jpg', type: image.mime
            });

            await API.post('/chat/upload-chat-image', data,{
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
}

export default chat