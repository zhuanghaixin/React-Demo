import axios from 'axios';
const instance=axios.create({
    baseURL:'https://a-burger-builder-96e8a.firebaseio.com/'
})


export default instance;
