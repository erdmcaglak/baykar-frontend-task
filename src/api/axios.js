import axios from "axios"

const SERVER_URL = 'https://jsonplaceholder.typicode.com/posts'

const AXIOS = axios.create({
    baseURL: SERVER_URL,
    timeout: 20000,
});

export const getQuestions = () =>{
    return new Promise((resolve, reject)=>{
        AXIOS.get()
        .then(res=>resolve(res.data))
        .catch(reject)
    })
}