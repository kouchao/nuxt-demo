import axios from 'axios'
import {BASEURL} from '../config.js'
const ax = axios.create({
  baseURL: BASEURL
})


export const getList = (data) => ax.get('/contents/list', {
  params: data
})
