import axios from 'axios'


const API_URL = '/api/users/register-new-user'

export const registerNewUser = async (user) => {
    try {
        const response = await axios.post(API_URL, user);
        return response.data
    } catch (error) {
        return error
    }
}


const service = {
    registerNewUser,
}



export default service