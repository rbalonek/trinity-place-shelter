import axios from 'axios'

const apiUrl = `INSERT HEROKU API URL HERE. DON'T FORGET TO END IN /API`

const api = axios.create({
  baseURL: apiUrl,
})

export default api
