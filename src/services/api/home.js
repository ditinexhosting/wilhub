import { handleResponse, API, getToken } from './utils';

const home = {
    getRecentlyActiveUsers: async () => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/home/get-recent-active-users`,
                { 'headers': { 'Authorization': 'Bearer: ' + token } }
            )
        }
        catch (e) {
            response = e
        }
        return handleResponse(response);
    },
    getIntroductions: async (page=1,filter) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/home/get-newsfeeds/?page=${page}`,
                {
                    params: filter,
                    'headers': { 'Authorization': 'Bearer: ' + token }
                }
            )
        }
        catch (e) {
            response = e
        }
        
        return handleResponse(response);
    },
    getNotificationCount: async () => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/home/get-unread-notification-count`,
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
    getNotifications: async () => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/home/get-notifications`,
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
    sendLike: async (id, isLiked) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.post('/home/send-like', {
                profile_picture_id: id,
                isLiked: isLiked
            },
                { 'headers': { 'Authorization': 'Bearer: ' + token } }
            )
        }
        catch (e) {
            response = e
        }
        return handleResponse(response);
    },
    updateLocation: async (location) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.post('/home/update-location', {
                location: location
            },
                { 'headers': { 'Authorization': 'Bearer: ' + token } }
            )
        }
        catch (e) {
            response = e
        }
        return handleResponse(response);
    },
}

export default home