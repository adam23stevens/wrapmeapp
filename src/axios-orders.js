import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-b0e1e.firebaseio.com/'
});

export default instance;