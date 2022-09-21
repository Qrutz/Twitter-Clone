export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';
const axios = require('axios');

const token = localStorage.getItem('token');

export async function createPost(post) {
    try {
        const response = await axios.post(`${API_URL}/api/post/createPost`,{
            content: post
        },
        {
            headers: {
                "x-access-token": `${token}` 
                }
                });

        return response.data;
    } catch (e) {
        console.log(e);
    }
}



//export default createPost;
