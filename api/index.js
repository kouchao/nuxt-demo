import axios from 'axios'
import {BASEURL} from '../config.js'
const ax = axios.create({
  baseURL: BASEURL
})


export const getList = (params) => ax.get('/contents/list', {
  params
})

export const getMessage = (params) => ax.get('/message/list', {
  params
})

export const sendMessage = (params) => ax.post('/message/add', params)

