import axios from 'axios'

const apiUrl = 'https://api-trinity-volunteers.herokuapp.com/api'

const api = axios.create({
  baseURL: apiUrl,
})

export default api
