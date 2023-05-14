import axios from 'axios'


const API_URL = '/api/users/register-new-user'

// Register user
const registerNewUser = async (user) => {
    try {
        const response = await axios.post(API_URL, user)

        return response.data
    } catch (error) {
        throw error;
    }
}



// Get all customers
const getAllCustomers = async () => {
    try {
        const response = await axios.get(API_URL)

        return response.data
    } catch (error) {
        throw error;
    }
}

const service = {
    registerNewUser,
}


export default service