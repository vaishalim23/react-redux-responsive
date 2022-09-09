import axios from 'axios'
const baseURL='https://jsonplaceholder.typicode.com';
export function getAllUsers(){
    return axios.get(`${baseURL}/users`);
}

export function deleteUser(id){
    return axios.delete(`${baseURL}/users/${id}`)
}