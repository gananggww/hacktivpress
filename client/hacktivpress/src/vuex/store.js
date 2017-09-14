import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex)

const http = axios.create({
  baseURL: `http://localhost:3000`
})

const state = {
  logon: [],
  register: [],
  allArticles: []
}

const mutations = {
  setLogin (state, payload) {
    console.log('data mutation sbg payload user: ', payload)
    state.logon = payload
  },
  setRegister (state, payload) {
    console.log('datamutasi register', payload)
    state.register = payload
  },
  setArticles (state, payload) {
    console.log('data  mutation sbg payload semua article: ', payload)
    state.allArticles = payload
  }
}

const actions = {
  getUser (context, payload) {
   http.post('/users/login', {
     username: payload.username,
     password: payload.password
   })
   .then(response => {
     console.log('data di action ====> ', response)
     localStorage.setItem('token', response.data.token)
     context.commit('setRegister', response.data)
   })
   .catch(err => {
     console.log(err)
   })
 },
 createUser (context, payload) {
   http.post('/users/register', {
     fullname: payload.fullname,
     email: payload.email,
     username: payload.username,
     password: payload.password
   })
   .then(response => {
     context.commit('setRegister', response.data)
   })
   .catch(err => {
     console.log(err)
   })
 },
 getArticles (context, payload) {
   http.get('/questions/all')
   .then(response => {
     console.log('ini response questions all user: ', response)
     context.commit('setArticles', response.data)
   })
   .catch(err => {
     console.log(err)
   })
 }
}

const store = new vuex.Store({
  state,
  mutations,
  actions
})

export default store
