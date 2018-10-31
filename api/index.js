import axios from 'axios'
import {BASEURL} from '../config.js'
const ax = axios.create({
  baseURL: BASEURL
})


export const getList = () => ax.get('/contents/list')
