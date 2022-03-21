import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import students from '../store/modules/students'
let store = new Vuex.Store({
    modules:{
      students
    }
})

export default store