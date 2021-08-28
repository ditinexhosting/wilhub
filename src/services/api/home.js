import { handleResponse, API, getToken } from './utils';

const home = {
    getCourses: async () => {
        let response = null
        //const token = await getToken()
        try {
            response = await API.get(`/courses`,
                { 'headers': { 'Content-Type': 'application/json' } }
            )
        }
        catch (e) {
            response = e
        }
        return handleResponse(response);
    }
}

export default home