import api from '../../api/imgur'

// 1. State calls actions
const state = {
  token: null
}

const getters = {
  isLoggedIn: state => !!state.token
}

// 2. Actions call mutations
const actions = {
  login: () => {
    api.login()
  },
  logout: ({ commit }) => {
    commit('setToken', null)
  }
}

// 3. Mutations update state
const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
