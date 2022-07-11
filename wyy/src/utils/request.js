import axios from 'axios'

const request = axios.create({
    baseURL:"http://localhost:3000"
})
console.log(request);

export default request