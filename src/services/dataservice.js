import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:4000/api/events',
    headers:{
        'Content-Type' : 'application/json'
    }
});

export default instance;