import Vue from "vue";
import vuex from "vuex";
import city from "./modules/city";

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    city
  }
})