import axios from 'axios'

const state = {
  info: {}
}

const actions = {
    info: async ({commit}, id) => {
      const res = await axios({url: `/get-data/student-info/${id}`})
      console.log(res.data.data[0], 'info')
      commit("info", {data: res.data.data[0]})
    },
}

const mutations = {
  info(state, payload) {
    state.info = payload
  }
}

export default {
    namespaced: true,
    state, actions, mutations
}