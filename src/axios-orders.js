import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ea9b3.firebaseio.com/'
}) 

export default instance;