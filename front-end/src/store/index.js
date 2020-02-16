import Vue from "vue";
import Vuex from "vuex";
import Constant from "../assets/Constant";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    src: ""
  },
  mutations: {
    [Constant.CHANGE_SRC]: (state, payload) => {
      state.src = payload.src;
    }
  },
  actions: {},
  modules: {},
  strict: true // 각 컴포넌트에서 이 값을 직접 변경하지 못하도록 설정
});
