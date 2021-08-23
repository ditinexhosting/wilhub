import { handleResponse, API, getToken } from './utils';

const peoples = {
    getRecentlyActivePeoples: async (page=1,filter,location) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/people/get-recently-active-users/?page=${page}`,
                {
                    params: {...filter,location},
                    'headers': { 'Authorization': 'Bearer: ' + token }
                }
            )
        }
        catch (e) {
            response = e
        }
        
        return handleResponse(response);
    },
    searchPeople: async (page=1,query) => {
        let response = null
        const token = await getToken()
        try {
            response = await API.get(`/people/search-people`,
                {
                    params: {
                        page: page,
                        string: query
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
}

export default peoples