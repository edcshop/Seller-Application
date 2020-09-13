import axios from 'axios'
import {API_URL} from '../config/env'
var qs = require('qs')

const REQ_INSTANCE = axios.create({
  timeout: 20000,
  header: {
  }
});

REQ_INSTANCE.apiRequest = function (api, data) {
  let url = API_URL + api;
  let queryStr = qs.stringify(data);
  console.log(API_URL, data, queryStr)
  return REQ_INSTANCE.post(url, queryStr)
};

/**
 * [响应统一处理代码]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
REQ_INSTANCE.interceptors.response.use(response => {
  if (response.data.errno === 14) {
  } else if (response.data.errno !== 0) {
    alert(response.data.errmsg)
  }
  return response;
}, error => {
  return Promise.reject(error)
})

export const collectionCreate = (data) => {
  return REQ_INSTANCE.apiRequest('/collect/create', data)
}
