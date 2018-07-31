import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { user } from "./modules/user";
Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        user
    },
    plugins: [
        createPersistedState()
    ],
    strict: false,

});

export default store;
