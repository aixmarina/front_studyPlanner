import axios from "../axios.ts"
import {AxiosResponse} from "axios";

const getCsrfToken = async () => {
  const csrfResponse = await axios.get('/csrfToken')
  axios.defaults.headers['X-CSRF-TOKEN'] = csrfResponse.data.csrfToken
}

const setToken = (loginResponse: AxiosResponse) => {
  localStorage.setItem('token', loginResponse.data.token)
  axios.defaults.headers.common['Authorization'] = `Bearer ${loginResponse.data.token}`
}

export const login = async (email: string, password: string): Promise<void> => {
  await getCsrfToken()
  const loginResponse = await axios.post('/login', { email, password })
  setToken(loginResponse)
}

export const logout = async (): Promise<void> => {
  await getCsrfToken()
  await axios.post('/logout')
  localStorage.removeItem('token')
  delete axios.defaults.headers.common['Authorization']
}

