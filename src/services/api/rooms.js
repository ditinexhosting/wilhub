import { handleResponse, API, getToken } from './utils';

const rooms = {
    getRooms: async () => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/room/get-default-room-list`,
                { 'headers': { 'Authorization': 'Bearer: ' + token } }
            )
        }
        catch (e) {
            response = e
        }
        return handleResponse(response);
    },
}

export default rooms