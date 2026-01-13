import { API_CONFIG } from './config'
import axios from 'axios'

const instance = axios.create({
    baseURL:API_CONFIG.baseURL
})
