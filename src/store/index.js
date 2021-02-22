import Vue from 'vue'
import Vuex from 'vuex'
import * as Cookies from 'js-cookie'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 1 }),
      removeItem: key => Cookies.remove(key)
    }
  })],
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
});
export default store;
