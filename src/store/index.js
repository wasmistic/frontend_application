import Vue from 'vue'
import Vuex from 'vuex'
import todos from "../store/module/todos";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";
// const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    todos
  },
  plugins: [createPersistedState()],
});


