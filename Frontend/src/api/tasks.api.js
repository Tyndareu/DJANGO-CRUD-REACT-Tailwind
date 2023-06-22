import axios from 'axios'

const tasksApi = axios.create({
  baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})
export const GetTask = (id) => tasksApi.get(`/${id}/`)

export const GetAllTasks = () => tasksApi.get('/')

export const CreateTask = (task) => tasksApi.post('/', task)

export const UpdateTask = (id, task) => tasksApi.put(`/${id}/`, task)

export const DeleteTask = (id) => tasksApi.delete(`/${id}/`)
