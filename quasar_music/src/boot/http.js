import axios from "axios"
import Vue from 'vue'
import { Notify } from 'quasar'

axios.interceptors.request.use(config => {
  if (sessionStorage.getItem('token') && config.url.indexOf('token') == -1) {
    config.url = config.url + '?token=' + sessionStorage.getItem('token')
  } else {
    config.url = config.url + '&token=' + sessionStorage.getItem('token')
  }
  return config
}, error => {
  console.log('error res', error)
  Notify.create({
    message: res
  })
})

