import axios from 'axios'
const URL = 'http://localhost:8000/tasks/api/v1/tasks/'

export const GetAllTasks = () => {
    return axios.get(URL)
}

