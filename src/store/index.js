import Vue from "vue";
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate";

/**
 * Vuex modules
 */
import UserModule from "./modules/user.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user: UserModule,
    },
    plugins: [
        createPersistedState({
            key: "social_app",
            paths: "user",
            storage: {
                getItem: (key) => localStorage.getItem(key),
                setItem: (key, data) => localStorage.setItem(key, data),
                removeItem: (key) => localStorage.removeItem(key),
            },
        }),
    ],
});
