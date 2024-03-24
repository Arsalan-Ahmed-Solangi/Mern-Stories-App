import axios from 'axios';

const BASEURL = 'http://localhost:5000/api';

export const getStories = async () => {
    try {
        const response = await axios.get(`${BASEURL}/stories/`);
    
        if (response.data.success === true) {
            return response.data.data
        } else {
            return [];
        }

    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const getSingleStory = async (id) => {
    try {
        const response = await axios.get(`${BASEURL}/stories/${id}`);
   
        if (response.data.success === true) {
            console.log(response);
            return response.data.data
        } else {
            return [];
        }

    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};
