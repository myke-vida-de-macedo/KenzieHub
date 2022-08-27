import axios from 'axios'

const token = localStorage.getItem("@KenzieHub:token") 

export const api = axios.create({
    baseURL:"https://kenziehub.herokuapp.com/",
    timeout:5000,
    headers:{
        "Authorization":`Bearer ${token}`
    }
})
