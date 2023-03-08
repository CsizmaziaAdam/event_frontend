import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:4000/api/event',
    headers:{
        'Content-Type' : 'application/json'
    }
});

export default instance;